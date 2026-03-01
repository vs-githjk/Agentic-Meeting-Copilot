export default function SummaryCard({ summary }) {
  if (!summary) return null
  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Summary</h3>
      <p className="text-gray-200 leading-relaxed">{summary}</p>
    </div>
  )
}
