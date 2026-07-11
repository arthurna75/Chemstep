import Link from 'next/link'
import GlossaryTerm from '@/components/lessons/GlossaryTerm'

export type LinkMap = Map<string, string | null>

interface HeadingBlock { type: 'heading'; text: string; badge?: '기초' | '핵심' | '심화' }
interface NoteBlock { type: 'note'; text: string }
interface OrderedListBlock { type: 'ordered-list'; items: string[] }
interface UnorderedListItem { text: string; children: string[] }
interface UnorderedListBlock { type: 'unordered-list'; items: UnorderedListItem[] }
interface ParagraphBlock { type: 'paragraph'; text: string }
interface BlankBlock { type: 'blank' }

type Block =
  | HeadingBlock
  | NoteBlock
  | OrderedListBlock
  | UnorderedListBlock
  | ParagraphBlock
  | BlankBlock

const CIRCLED_RE = /^[①②③④⑤⑥⑦⑧⑨⑩]\s*/
const BADGE_RE = /\s*\((기초|핵심|심화)\)\s*$/
const TOKEN_RE = /\{\{([^{}]+?)::([^{}]+?)\}\}|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(→|↔)|(\d*p)_([xyz])\b/g
const INTERNAL_LINK_RE = /\[[^\]]+\]\((lesson:[^)]+|chapter:[^)]+)\)/g

function splitBlocks(text: string): Block[] {
  const lines = text.split('\n')
  const blocks: Block[] = []
  let openOrdered: string[] | null = null
  let openUnordered: UnorderedListItem[] | null = null

  const flushOrdered = () => {
    if (openOrdered && openOrdered.length > 0) blocks.push({ type: 'ordered-list', items: openOrdered })
    openOrdered = null
  }
  const flushUnordered = () => {
    if (openUnordered && openUnordered.length > 0) blocks.push({ type: 'unordered-list', items: openUnordered })
    openUnordered = null
  }
  const flushLists = () => {
    flushOrdered()
    flushUnordered()
  }

  for (const rawLine of lines) {
    const trimmed = rawLine.trimStart()

    if (trimmed.startsWith('■')) {
      flushLists()
      let headingText = trimmed.replace(/^■\s*/, '')
      const badgeMatch = headingText.match(BADGE_RE)
      let badge: HeadingBlock['badge']
      if (badgeMatch) {
        badge = badgeMatch[1] as HeadingBlock['badge']
        headingText = headingText.slice(0, badgeMatch.index).trimEnd()
      }
      blocks.push({ type: 'heading', text: headingText, badge })
      continue
    }

    if (trimmed.startsWith('※')) {
      flushLists()
      blocks.push({ type: 'note', text: trimmed.replace(/^※\s*/, '') })
      continue
    }

    if (CIRCLED_RE.test(trimmed)) {
      flushUnordered()
      if (!openOrdered) openOrdered = []
      openOrdered.push(trimmed.replace(CIRCLED_RE, ''))
      continue
    }

    if (trimmed.startsWith('- ') || trimmed === '-') {
      flushOrdered()
      const isNested = rawLine.length > trimmed.length
      const itemText = trimmed.replace(/^-\s*/, '')
      if (!openUnordered) openUnordered = []
      if (isNested && openUnordered.length > 0) {
        openUnordered[openUnordered.length - 1].children.push(itemText)
      } else {
        openUnordered.push({ text: itemText, children: [] })
      }
      continue
    }

    flushLists()
    blocks.push(trimmed === '' ? { type: 'blank' } : { type: 'paragraph', text: rawLine })
  }
  flushLists()
  return blocks
}

function renderLink(
  text: React.ReactNode[],
  rawText: string,
  target: string,
  key: string,
  linkMap?: LinkMap
): React.ReactNode {
  if (target.startsWith('http://') || target.startsWith('https://')) {
    return (
      <a
        key={key}
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {text}
      </a>
    )
  }

  if (target.startsWith('lesson:') || target.startsWith('chapter:')) {
    const href = linkMap?.get(target)
    if (href) {
      return (
        <Link key={key} href={href} className="text-blue-600 underline hover:text-blue-800">
          {text}
        </Link>
      )
    }
    return `[${rawText}](${target})`
  }

  return `[${rawText}](${target})`
}

function renderInline(text: string, keyPrefix: string, linkMap?: LinkMap): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let idx = 0

  for (const match of text.matchAll(TOKEN_RE)) {
    const start = match.index ?? 0
    if (start > lastIndex) nodes.push(text.slice(lastIndex, start))
    const key = `${keyPrefix}-t${idx++}`

    if (match[1] !== undefined) {
      nodes.push(<GlossaryTerm key={key} keyProp={key} term={match[1]} definition={match[2]} />)
    } else if (match[3] !== undefined) {
      const linkText = match[3]
      const target = match[4]
      nodes.push(renderLink(renderInline(linkText, `${key}-l`, linkMap), linkText, target, key, linkMap))
    } else if (match[5] !== undefined) {
      nodes.push(
        <strong key={key} className="font-bold text-blue-700">
          {match[5]}
        </strong>
      )
    } else if (match[6] !== undefined) {
      nodes.push(
        <span key={key} className="mx-0.5 text-gray-400">
          {match[6]}
        </span>
      )
    } else if (match[7] !== undefined) {
      nodes.push(
        <span key={key}>
          {match[7]}
          <sub>{match[8]}</sub>
        </span>
      )
    }

    lastIndex = start + match[0].length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

function badgeClass(badge: string): string {
  switch (badge) {
    case '기초':
      return 'text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700'
    case '핵심':
      return 'text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700'
    case '심화':
      return 'text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700'
    default:
      return 'text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700'
  }
}

function renderBlocks(blocks: Block[], keyPrefix: string, linkMap?: LinkMap): React.ReactNode {
  return blocks.map((block, i) => {
    const key = `${keyPrefix}-b${i}`
    switch (block.type) {
      case 'heading':
        return (
          <div
            key={key}
            className="mt-5 mb-1 pl-3 border-l-4 border-blue-500 text-base font-bold text-gray-900 first:mt-0 flex items-center gap-2"
          >
            <span>{renderInline(block.text, `${key}-h`, linkMap)}</span>
            {block.badge && <span className={badgeClass(block.badge)}>{block.badge}</span>}
          </div>
        )
      case 'note':
        return (
          <div
            key={key}
            className="my-3 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg px-4 py-2 text-sm text-gray-700"
          >
            {renderInline(block.text, `${key}-n`, linkMap)}
          </div>
        )
      case 'ordered-list':
        return (
          <ol key={key} className="list-decimal list-outside pl-6 my-2 space-y-1">
            {block.items.map((item, ii) => (
              <li key={`${key}-i${ii}`}>{renderInline(item, `${key}-i${ii}`, linkMap)}</li>
            ))}
          </ol>
        )
      case 'unordered-list':
        return (
          <ul key={key} className="list-disc list-outside pl-6 my-2 space-y-1">
            {block.items.map((item, ii) => (
              <li key={`${key}-i${ii}`}>
                {renderInline(item.text, `${key}-i${ii}`, linkMap)}
                {item.children.length > 0 && (
                  <ul className="list-[circle] list-outside pl-6 mt-1 space-y-1">
                    {item.children.map((child, ci) => (
                      <li key={`${key}-i${ii}-c${ci}`}>
                        {renderInline(child, `${key}-i${ii}-c${ci}`, linkMap)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )
      case 'paragraph':
        return <div key={key}>{renderInline(block.text, `${key}-p`, linkMap)}</div>
      case 'blank':
        return <div key={key}>{' '}</div>
    }
  })
}

interface RenderMarkupOptions {
  blocks?: boolean
  linkMap?: LinkMap
}

export function renderMarkup(text: string, opts: RenderMarkupOptions = {}): React.ReactNode {
  if (opts.blocks) {
    return renderBlocks(splitBlocks(text), 'md', opts.linkMap)
  }
  return renderInline(text, 'md', opts.linkMap)
}

export function extractInternalLinkTargets(text: string): string[] {
  const targets = new Set<string>()
  for (const match of text.matchAll(INTERNAL_LINK_RE)) {
    targets.add(match[1])
  }
  return [...targets]
}
