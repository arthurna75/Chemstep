interface Props {
  analogy: string
}

export default function AnalogySection({ analogy }: Props) {
  return (
    <section className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
      <h2 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
        <span>💡</span> 쉬운 비유
      </h2>
      <p className="text-gray-700 leading-relaxed">{analogy}</p>
    </section>
  )
}
