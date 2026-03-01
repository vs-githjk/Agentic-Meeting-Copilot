import { useState } from 'react'

export default function EmailCard({ email }) {
  const [copied, setCopied] = useState(false)

  if (!email || (!email.subject && !email.body)) return null

  const handleCopy = () => {
    const text = `Subject: ${email.subject}\n\n${email.body}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">Follow-up Email Draft</h3>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {email.subject && (
        <p className="text-gray-400 text-sm mb-2">
          <span className="text-gray-500">Subject:</span> {email.subject}
        </p>
      )}
      <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap bg-gray-900 rounded-lg p-4 border border-gray-700 overflow-x-auto">
        {email.body}
      </pre>
    </div>
  )
}
