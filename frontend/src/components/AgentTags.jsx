const AGENT_COLORS = {
  summarizer: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  action_items: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  sentiment: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  email_drafter: 'bg-green-500/20 text-green-300 border-green-500/30',
  calendar_suggester: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
}

const AGENT_LABELS = {
  summarizer: 'Summarizer',
  action_items: 'Action Items',
  sentiment: 'Sentiment',
  email_drafter: 'Email Drafter',
  calendar_suggester: 'Calendar',
}

export default function AgentTags({ agents }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-gray-400 text-sm self-center">Agents run:</span>
      {agents.map((agent) => (
        <span
          key={agent}
          className={`text-xs font-medium px-3 py-1 rounded-full border ${AGENT_COLORS[agent] || 'bg-gray-700 text-gray-300 border-gray-600'}`}
        >
          {AGENT_LABELS[agent] || agent}
        </span>
      ))}
    </div>
  )
}
