# Agentic Meeting Copilot

Multi-agent AI that transforms meeting transcripts into summaries, action items, sentiment analysis, follow-up emails, and calendar suggestions — powered by Groq + Llama 3.3 70B.

## Setup

```bash
# Backend
cp backend/.env.example backend/.env   # add your GROQ_API_KEY
cd backend && pip install -r requirements.txt && uvicorn main:app --reload

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

Get a free Groq API key at https://console.groq.com
