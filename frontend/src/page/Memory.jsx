import React from "react";

function Memory() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-white text-center mb-4">Audio to Text</h1>
          <div className="card shadow-lg p-4 bg-white rounded-4">
            <h5 className="mb-3 text-black text-center">Upload the Audio</h5>
            <div className="upload-area text-center border border-2 border-dashed rounded-3 p-4 mb-3">
              <input type="file" className="form-control" />
              <p className="mt-3 text-muted">Supports mp3, wav</p>
            </div>
            <div className="d-grid gap-2 d-md-block text-center">
              <button className="btn btn-primary me-2">Upload</button>
              <button className="btn btn-danger">Clear</button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-white text-center mb-2">Transcribed Text</p>
            <textarea
              className="form-control"
              rows="10"
              placeholder="Your transcribed text will appear here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memory;
