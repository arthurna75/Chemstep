interface Props {
  term: string
  definition: string
  keyProp: string
}

export default function GlossaryTerm({ term, definition, keyProp }: Props) {
  return (
    <details key={keyProp} className="inline-block align-baseline group">
      <summary className="cursor-pointer list-none inline text-blue-700 font-medium border-b-2 border-dotted border-blue-300 [&::-webkit-details-marker]:hidden marker:hidden">
        {term}
      </summary>
      <span className="block mt-1 mb-1 text-sm text-gray-700 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
        {definition}
      </span>
    </details>
  )
}
