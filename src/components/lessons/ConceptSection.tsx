interface Props {
  content: string
}

function renderInlineBold(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="font-bold text-blue-700">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

function renderContent(content: string) {
  return content.split('\n').map((line, i) => {
    const trimmed = line.trimStart()
    if (trimmed.startsWith('■ ') || trimmed.startsWith('■')) {
      return (
        <div
          key={i}
          className="mt-5 mb-1 pl-3 border-l-4 border-blue-500 text-base font-bold text-gray-900 first:mt-0"
        >
          {renderInlineBold(trimmed.replace(/^■\s*/, ''), `h${i}`)}
        </div>
      )
    }
    return (
      <div key={i}>
        {renderInlineBold(line, `l${i}`)}
        {line === '' && ' '}
      </div>
    )
  })
}

export default function ConceptSection({ content }: Props) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span>📖</span> 개념 설명
      </h2>
      <div className="text-gray-700 leading-relaxed">{renderContent(content)}</div>
    </section>
  )
}
