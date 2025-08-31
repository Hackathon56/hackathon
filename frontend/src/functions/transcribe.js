import axios from "axios";

const Voice_Api = "c8790c6338b9402a95a787af78f65193";

async function uploadAudio(filePath) {
  const response = await axios.post(
    "https://api.assemblyai.com/v2/upload",
    filePath,
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

export default async function transcribeAudioEXP(filePath) {
  try {
    const audioUrl = await uploadAudio(filePath);
    const job = await transcribeAudio(audioUrl);
    const text = await getTranscript(job.id);
    return text;
  } catch (error) {
    console.error("Error transcribing audio:", error);
    throw error;
  }
}
