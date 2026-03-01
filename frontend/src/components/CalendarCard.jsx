export default function CalendarCard({ suggestion }) {
  if (!suggestion || !suggestion.recommended) return null

  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-pink-500/30">
      <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">
        Calendar Suggestion
      </h3>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-200 text-sm">{suggestion.reason}</p>
          {suggestion.suggested_timeframe && (
            <p className="text-pink-300 text-sm mt-1 font-medium">{suggestion.suggested_timeframe}</p>
          )}
        </div>
      </div>
    </div>
  )
}
