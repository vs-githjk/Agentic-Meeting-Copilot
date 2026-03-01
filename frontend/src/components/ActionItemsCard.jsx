import { useState } from 'react'

export default function ActionItemsCard({ actionItems }) {
  const [checked, setChecked] = useState({})

  if (!actionItems || actionItems.length === 0) return null

  const toggle = (i) => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
      <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Action Items</h3>
      <ul className="space-y-3">
        {actionItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <button
              onClick={() => toggle(i)}
              className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                checked[i]
                  ? 'bg-purple-500 border-purple-500'
                  : 'border-gray-500 hover:border-purple-400'
              }`}
            >
              {checked[i] && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <div className={`flex-1 ${checked[i] ? 'opacity-50 line-through' : ''}`}>
              <p className="text-gray-200 text-sm">{item.task}</p>
              <div className="flex gap-3 mt-1">
                {item.owner && item.owner !== 'Unassigned' && (
                  <span className="text-xs text-gray-400">
                    <span className="text-gray-500">Owner:</span> {item.owner}
                  </span>
                )}
                {item.due && item.due !== 'TBD' && (
                  <span className="text-xs text-gray-400">
                    <span className="text-gray-500">Due:</span> {item.due}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
