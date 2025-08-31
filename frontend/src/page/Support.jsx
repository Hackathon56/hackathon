import "./Support.css";

function Support() {
  return (
    <>
      <div className="1stcart"></div>
      <div className="container py-5">
        <div className="feedback-card text-center">
          <h5 style={{ color: "black" }}>
            How would you rate your website experience?
          </h5>
          <div className="d-flex justify-content-center mt-3">
            <span className="emoji-option">😞</span>
            <span className="emoji-option">😐</span>
            <span className="emoji-option">😊</span>
            <span className="emoji-option">😍</span>
          </div>
        </div>
      </div>
      <div className="feedback-card">
        <h5 style={{ color: "black" }}>
          We're sorry to see you go! What's your reason for leaving?
        </h5>
        <div className="d-flex flex-wrap mt-3">
          <button className="btn btn-outline-primary reason-btn">
            I didn’t find what I was looking for
          </button>
          <button className="btn btn-outline-primary reason-btn">
            I didn’t find the website easy to use
          </button>
          <button className="btn btn-outline-primary reason-btn">
            It was too expensive for me
          </button>
          <button className="btn btn-outline-primary reason-btn">
            The website is very confusing
          </button>
        </div>
      </div>

      <div className="feedback-card">
        <h5 style={{ color: "black" }}>
          Please share in detail what we can improve your website experience.
        </h5>
        <textarea
          className="form-control mt-3"
          rows="4"
          placeholder="Enter your feedback here..."
        ></textarea>
        <div className="text-end mt-3">
          <button className="btn btn-primary btn-submit">
            Submit Feedback
          </button>
        </div>
      </div>
    </>
  );
}

export default Support;
