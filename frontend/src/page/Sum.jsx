import { useState } from "react";

function Sum() {
  const [result, setResult] = useState("Your result will be reflected here.");
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
          ></textarea>
        </div>
        <div className="mt-4 d-flex gap-3 justify-content-center">
          <button className="btn btn-primary">Summarize Text</button>
          <button className="btn btn-secondary">Clear</button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h3>Result</h3>
          <div
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
              color: "gray",
              textAlign: "start",
            }}
          >
            {result}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sum;
