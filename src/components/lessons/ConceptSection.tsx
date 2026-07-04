interface Props {
  content: string
}

export default function ConceptSection({ content }: Props) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span>📖</span> 개념 설명
      </h2>
      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</div>
    </section>
  )
}
