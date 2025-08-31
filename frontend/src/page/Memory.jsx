import React from "react";
import "./memory.css";
import transcribeAudio from "../functions/transcribe";

function Memory() {
  const [audioFile, setAudioFile] = React.useState(null);
  const [transcribedText, setTranscribedText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!audioFile) return;

    try {
      setLoading(true);
      const response = await transcribeAudio(audioFile);
      setTranscribedText(response || "");
    } catch (error) {
      setTranscribedText("Error transcribing audio.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setAudioFile(null);
    setTranscribedText("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-white text-center mb-4">Audio to Text</h1>
          <div className="shadow-lg p-4 bg-white rounded-4">
            <h5 className="mb-3 text-black text-center">Upload the Audio</h5>
            <form onSubmit={handleSubmit} onReset={handleClear}>
              <div className="upload-area text-center border border-2 border-dashed rounded-3 p-4 mb-3">
                <input
                  type="file"
                  name="audio"
                  accept="audio/*"
                  className="form-control"
                  onChange={handleFileChange}
                />
                <p className="mt-3 text-muted">Supports mp3, wav</p>
              </div>
              <div className="d-grid gap-2 d-md-block text-center">
                <button
                  className="btn btn-primary me-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Transcribing..." : "Upload"}
                </button>
                <button
                  className="btn btn-danger"
                  type="reset"
                  disabled={loading}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
          <div className="mt-4">
            <p className="text-white text-center mb-2">Transcribed Text</p>
            <textarea
              className="form-control"
              rows="10"
              placeholder="Your transcribed text will appear here..."
              value={transcribedText}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memory;
