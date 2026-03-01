const SENTIMENT_CONFIG = {
  positive: { badge: 'bg-green-500/20 text-green-300 border-green-500/30', bar: 'bg-green-500', label: 'Positive' },
  neutral: { badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', bar: 'bg-yellow-500', label: 'Neutral' },
  tense: { badge: 'bg-red-500/20 text-red-300 border-red-500/30', bar: 'bg-red-500', label: 'Tense' },
  unresolved: { badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30', bar: 'bg-orange-500', label: 'Unresolved' },
}

export default function SentimentCard({ sentiment }) {
  if (!sentiment) return null

  const config = SENTIMENT_CONFIG[sentiment.overall] || SENTIMENT_CONFIG.neutral
  const score = Math.max(0, Math.min(100, sentiment.score ?? 50))

  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
      <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3">Sentiment</h3>
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${config.badge}`}>
          {config.label}
        </span>
        <span className="text-gray-400 text-sm">Score: {score}/100</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
        <div
          className={`h-2 rounded-full transition-all ${config.bar}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
      {sentiment.notes && (
        <p className="text-gray-400 text-sm mt-2">{sentiment.notes}</p>
      )}
    </div>
  )
}
