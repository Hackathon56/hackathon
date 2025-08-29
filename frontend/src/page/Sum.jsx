import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import MeetingEditor from "../components/MeetingEditor";
import html2pdf from "html2pdf.js";

function minutesToHtml(data) {
  if (!data) return "<p>No data</p>";

  return `
    <h1>${data.title}</h1>
    <p><em>${data.date}</em></p>

    <h3>Participants</h3>
    <ul>
      ${data.participants.map((p) => `<li>${p}</li>`).join("")}
    </ul>

    <h3>Agenda</h3>
    <p>${data.agenda}</p>

    <h3>Discussion Points</h3>
    <ul>
      ${data.discussion_points.map((d) => `<li>${d}</li>`).join("")}
    </ul>

    <h3>Decisions</h3>
    <ul>
      ${data.decisions
        .map((d) => `<li><strong>${d.actor}:</strong> ${d.decision}</li>`)
        .join("")}
    </ul>

    <h3>Action Items</h3>
    <ul>
      ${data.action_items
        .map(
          (a) =>
            `<li><strong>${a.actor}:</strong> ${a.task} ${
              a.deadline ? `<em>(Deadline: ${a.deadline})</em>` : ""
            }</li>`
        )
        .join("")}
    </ul>

    <h3>Favorability</h3>
    <ul>
      ${data.favorability
        .map((f) => `<li><strong>${f.actor}:</strong> ${f.stance}</li>`)
        .join("")}
    </ul>
  `;
}

function Sum() {
  const [prompt, setPrompt] = useState("");
  const [data, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const GetResult = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}api/generate-minutes`, {
        transcript: prompt,
      });
      setResult(minutesToHtml(response.data));
    } catch (error) {
      console.error("Error generating minutes:", error);
    } finally {
      setLoading(false);
    }
  };

  const exportPDF = () => {
    if (!data) return;

    const element = document.createElement("div");
    element.innerHTML = data;

    const options = {
      margin: 10,
      filename: "meeting_minutes.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <>
      <div style={{ display: "block", textAlign: "center", padding: "20px" }}>
        <h1 style={{ color: "white" }}>Summarise your text here</h1>
        <div
          className="con"
          style={{
            display: "block",
            textAlign: "center",
          }}
        >
          <h3 className="text-secondary">Paste</h3>
          <textarea
            placeholder="paste raw meeting transcript (with optional speaker tags like 'Anubhav:' or 'speaker 1:')"
            style={{
              width: "60%",
              height: "300px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "white",
              padding: "15px",
              fontSize: "16px",
            }}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-4 d-flex gap-3 justify-content-center">
          <button
            className="btn btn-primary"
            onClick={GetResult}
            disabled={loading}
          >
            {loading ? "Loading..." : "Summarize Text"}
          </button>
          <button className="btn btn-secondary" onClick={() => setPrompt("")}>
            Clear
          </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h3 style={{ color: "white" }}>Result</h3>
          <div
            style={{
              width: "60%",
              minHeight: "300px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              padding: "15px",
              fontSize: "16px",
              textAlign: "start",
              color: "white",
            }}
          >
            {data ? (
              <div className="d-flex flex-column gap-2">
                <MeetingEditor initialContent={data} onChange={setResult} />
                <button onClick={exportPDF} className="btn btn-danger">
                  Export as PDF
                </button>
              </div>
            ) : (
              <div className="text-secondary">
                Your result will be reflected here.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sum;
