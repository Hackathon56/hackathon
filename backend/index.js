import express from "express";
import { pipeline, read_audio } from "@xenova/transformers";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
import decodeAudio from "audio-decode";
dotenv.config();

const app = express();
const PORT = 3000;
const upload = multer({ dest: "uploads/" });

const API_KEY = process.env.API_KEY || "";

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

Return valid JSON only with this structure:
{
  "title": "string",
  "date": "YYYY-MM-DD",
  "participants": ["..."],
  "agenda": "string",
  "discussion_points": ["..."],
  "decisions": [{"actor":"...","decision":"..."}],
  "action_items":[{"actor":"...","task":"...","deadline":"string|null"}]
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

let transcriber;

async function loadModel() {
  if (!transcriber) {
    console.log("Loading Whisper model... this may take a minute.");
    transcriber = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    );
  }
  return transcriber;
}

app.post("/api/audio2text", upload.single("audio"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const model = await loadModel();

    const filePath = req.file.path;

    const Buffer = fs.readFileSync(filePath);

    const audioBuffer = await decodeAudio(Buffer);

    const float32Array = audioBuffer.getChannelData(0);

    const result = await model(float32Array);

    // Clean up temp file
    fs.unlinkSync(filePath);

    res.json({ text: result.text });
  } catch (err) {
    console.error("Transcription error:", err);
    res.status(500).json({ error: "Failed to transcribe audio" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
