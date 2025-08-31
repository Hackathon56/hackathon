import React from "react";
import transcribeAudioEXP from "../functions/transcribe";

function Memoryto() {
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
      const response = await transcribeAudioEXP(audioFile);
      setTranscribedText(response || "");
    } catch (error) {
      setTranscribedText(`Error transcribing audio. ${error.message}`);
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
          <h1 className="text-white text-center mb-4">Video to Text</h1>
          <div className="shadow-lg p-4 bg-white rounded-4">
            <h5 className="mb-3 text-black text-center">Upload the Video</h5>
            <form onSubmit={handleSubmit} onReset={handleClear}>
              <div className="upload-area text-center border border-2 border-dashed rounded-3 p-4 mb-3">
                <input
                  type="file"
                  name="audio"
                  accept="video/*"
                  className="form-control"
                  onChange={handleFileChange}
                />
                <p className="mt-3 text-muted">
                  Supports mp4, mpv, webmp, avi.
                </p>
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

export default Memoryto;
