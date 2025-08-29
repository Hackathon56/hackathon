const express = require('express');
const OpenAI = require('openai');

const app = express();
const PORT = 3000;


const deepseek = new OpenAI({
  apiKey: process.env.API_KEY||'',
  baseURL: "https://api.deepseek.com"
});

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.post("/api/generate-minutes", async (req, res) => {
  try {
    const { transcript } = req.body;
    if (!transcript) {
      return res.status(400).json({ error: "Transcript text is required" });
    }

    const systemMsg = `
You are an expert meeting minutes extractor.
Extract from the transcript:
1. Key Discussion Points
2. Decisions Made (with speaker)
3. Action Items (with assignee and deadline)

Output ONLY valid JSON in this schema:
{
  "title": "string",
  "date": "YYYY-MM-DD",
  "participants": ["..."],
  "agenda": "string",
  "discussion_points": ["..."],
  "decisions": [{"actor":"...","decision":"..."}],
  "action_items":[{"actor":"...","task":"...","deadline":"string|null"}]
}
    `.trim();

    const response = await deepseek.chat.completions.create({
      model: "deepseek-reasoner", // or 'deepseek-chat'
      messages: [
        { role: "system", content: systemMsg },
        { role: "user", content: transcript }
      ],
      temperature: 0.2
    });

    const content = response.choices[0].message.content.trim();
    let minutes;
    try {
      minutes = JSON.parse(content);
    } catch (err) {
      return res.status(500).json({ error: "Invalid JSON from AI", raw: content });
    }
    res.json(minutes);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "DeepSeek call failed", details: String(error) });
  }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});