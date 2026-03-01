import json
import os
from groq import AsyncGroq
from fastapi import HTTPException

client = AsyncGroq(api_key=os.getenv("GROQ_API_KEY"))

SYSTEM_PROMPT = (
    "You are a meeting sentiment analyzer. Analyze the emotional tone and sentiment of the meeting. "
    'Return ONLY valid JSON: { "sentiment": { "overall": "positive|neutral|tense|unresolved", "score": 0-100, "notes": "" } }. '
    "Score: 100=very positive, 50=neutral, 0=very negative/tense."
)


def _strip_fences(text: str) -> str:
    text = text.strip()
    if text.startswith("```"):
        lines = text.splitlines()
        lines = lines[1:] if lines[0].startswith("```") else lines
        lines = lines[:-1] if lines and lines[-1].strip() == "```" else lines
        text = "\n".join(lines).strip()
    return text


async def run(transcript: str) -> dict:
    for attempt in range(2):
        response = await client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            temperature=0.3,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": f"Transcript:\n{transcript}"},
            ],
        )
        raw = response.choices[0].message.content
        try:
            return json.loads(_strip_fences(raw))
        except json.JSONDecodeError:
            if attempt == 1:
                raise HTTPException(status_code=500, detail="sentiment: failed to parse JSON after retry")
    return {"sentiment": {"overall": "neutral", "score": 50, "notes": ""}}
