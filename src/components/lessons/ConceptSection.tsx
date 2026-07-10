import { renderMarkup, resolveLinkMap } from '@/lib/markup'

interface Props {
  content: string
}

export default async function ConceptSection({ content }: Props) {
  const linkMap = await resolveLinkMap(content)

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span>📖</span> 개념 설명
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {renderMarkup(content, { blocks: true, linkMap })}
      </div>
    </section>
  )
}
