import express from "express";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = 3000;
const upload = multer({ dest: "uploads/" });

const API_KEY = process.env.API_KEY || "";
const Voice_Api = "c8790c6338b9402a95a787af78f65193";
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/api/generate-minutes", async (req, res) => {
  try {
    const { transcript } = req.body;
    if (!transcript) {
      return res.status(400).json({ error: "Transcript is required" });
    }

    const prompt = `
You are an AI Meeting Minutes Generator.
Extract from the transcript:
1. Key Discussion Points
2. Decisions Made (with actors)
3. Action Items (with assignees and deadlines)
4. Overall Favorability of Each Participant (whether they agreed more or denied more)

Return valid JSON only with this structure:
{
  "title": "string",
  "date": "YYYY-MM-DD",
  "participants": ["..."],
  "agenda": "string",
  "discussion_points": ["..."],
  "decisions": [{"actor":"...","decision":"..."}],
  "action_items":[{"actor":"...","task":"...","deadline":"string|null"}],
  "favorability":[{"actor":"...","stance":"agree|deny|neutral"}]
}

please note im using json parser so please ensure the output is valid JSON.

Transcript:
${transcript}
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    let aiContent =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    aiContent = aiContent.replace(/```json|```/g, "").trim();
    let minutes;
    try {
      minutes = JSON.parse(aiContent);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Invalid JSON from Gemini", raw: aiContent });
    }

    res.json(minutes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate minutes" });
  }
});

async function uploadAudio(filePath) {
  const data = fs.readFileSync(filePath);
  const response = await axios.post(
    "https://api.assemblyai.com/v2/upload",
    data,
    {
      headers: {
        authorization: Voice_Api,
        "content-type": "application/octet-stream",
      },
    }
  );
  return response.data.upload_url;
}

async function transcribeAudio(audioUrl) {
  const response = await axios.post(
    "https://api.assemblyai.com/v2/transcript",
    { audio_url: audioUrl },
    {
      headers: { authorization: Voice_Api },
    }
  );
  return response.data;
}

async function getTranscript(id) {
  while (true) {
    const res = await axios.get(
      `https://api.assemblyai.com/v2/transcript/${id}`,
      { headers: { authorization: Voice_Api } }
    );
    if (res.data.status === "completed") {
      return res.data.text;
    } else if (res.data.status === "error") {
      throw new Error(res.data.error);
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const audioUrl = await uploadAudio(filePath);
    const job = await transcribeAudio(audioUrl);
    const text = await getTranscript(job.id);
    res.json({ transcript: text });
    fs.unlinkSync(filePath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
