const API_KEY = "AIzaSyDTuUECDh-MaxjnUhqOMIeL57T_CEgRywo";
export default async function summarizeTranscript(transcript) {
  try {
    if (!transcript) {
      throw new Error("Transcript is required");
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
      throw new Error("Invalid JSON from Gemini");
    }

    return minutes;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to generate minutes");
  }
}
