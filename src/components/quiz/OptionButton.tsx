'use client'

interface Props {
  content: string
  index: number
  status: 'idle' | 'correct' | 'wrong' | 'disabled'
  onClick: () => void
}

const labels = ['①', '②', '③', '④', '⑤']

export default function OptionButton({ content, index, status, onClick }: Props) {
  const base = 'w-full text-left px-4 py-3 rounded-lg border text-sm transition-all flex items-start gap-3'
  const styles = {
    idle: 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer',
    correct: 'border-green-400 bg-green-50 text-green-800 cursor-default',
    wrong: 'border-red-300 bg-red-50 text-red-700 cursor-default',
    disabled: 'border-gray-100 bg-gray-50 text-gray-400 cursor-default',
  }

  return (
    <button
      className={`${base} ${styles[status]}`}
      onClick={status === 'idle' ? onClick : undefined}
      disabled={status === 'disabled'}
    >
      <span className="font-bold shrink-0">{labels[index] ?? index + 1}</span>
      <span>{content}</span>
    </button>
  )
}
