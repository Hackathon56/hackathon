import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

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
      setResult(response.data);
    } catch (error) {
      console.error("Error generating minutes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ display: "block", textAlign: "center", padding: "20px" }}>
        <h1>Summarise your text here</h1>
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
          <h3>Result</h3>
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
            }}
          >
            {data ? (
              <div className="container my-4">
                <div className="card bg-transparent border-0 ">
                  <div className="card-body">
                    <h1 className="card-title h3 mb-2">{data.title}</h1>
                    <h6 className="card-subtitle mb-3 text-muted">
                      {data.date}
                    </h6>

                    <h5>Participants</h5>
                    <ul className="list-group list-group-flush  mb-3">
                      {data.participants.map((p, idx) => (
                        <li
                          key={idx}
                          className="list-group-item bg-transparent"
                        >
                          * {p}
                        </li>
                      ))}
                    </ul>

                    <h5>Agenda</h5>
                    <p className="mb-3">{data.agenda}</p>

                    <h5>Discussion Points</h5>
                    <ul className="list-group list-group-flush mb-3">
                      {data.discussion_points.map((point, idx) => (
                        <li
                          key={idx}
                          className="list-group-item bg-transparent"
                        >
                          * {point}
                        </li>
                      ))}
                    </ul>

                    <h5>Decisions</h5>
                    <ul className="list-group list-group-flush mb-3">
                      {data.decisions.map((d, idx) => (
                        <li
                          key={idx}
                          className="list-group-item bg-transparent"
                        >
                          * <strong>{d.actor}:</strong> {d.decision}
                        </li>
                      ))}
                    </ul>

                    <h5>Action Items</h5>
                    <ul className="list-group list-group-flush">
                      {data.action_items.map((a, idx) => (
                        <li
                          key={idx}
                          className="list-group-item bg-transparent"
                        >
                          * <strong>{a.actor}:</strong> {a.task}{" "}
                          {a.deadline && (
                            <em className="text-muted">
                              (Deadline: {a.deadline})
                            </em>
                          )}
                        </li>
                      ))}
                    </ul>

                    <h5>Favorability</h5>
                    <ul className="list-group list-group-flush">
                      {data.favorability.map((f, idx) => (
                        <li
                          key={idx}
                          className="list-group-item bg-transparent"
                        >
                          * <strong>{f.actor}:</strong> {f.stance}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              "Your result will be reflected here."
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sum;
