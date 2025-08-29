import "./Footer.css";

export function Footer() {
  return (
    <>
      <section className="end-section">
        <div className="end-section-inner">
          <h2 className="end-heading">Try Transcribe today!</h2>
          <p className="end-description">
            Transcribe saves you time and lets you focus on the things that
            really matter for success.
          </p>
          <div className="app-links">
            <a href="#" className="app-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11.025 15.367C11.025 15.367 11.025 15.367 11.025 15.367L7.697 12.039L8.758 10.978L11.025 13.245L15.242 9.028L16.203 10L11.025 15.367Z"
                  fill="#fff"
                />
              </svg>
              <span className="app-link-text">
                Open
                <br />
                Online editor
              </span>
            </a>
            <a href="#" className="app-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11.025 15.367C11.025 15.367 11.025 15.367 11.025 15.367L7.697 12.039L8.758 10.978L11.025 13.245L15.242 9.028L16.203 10L11.025 15.367Z"
                  fill="#fff"
                />
              </svg>
              <span className="app-link-text">
                Download on the
                <br />
                App Store
              </span>
            </a>
            <a href="#" className="app-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11.025 15.367C11.025 15.367 11.025 15.367 11.025 15.367L7.697 12.039L8.758 10.978L11.025 13.245L15.242 9.028L16.203 10L11.025 15.367Z"
                  fill="#fff"
                />
              </svg>
              <span className="app-link-text">
                Download on the
                <br />
                Mac App Store
              </span>
            </a>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#a0aec0",
              marginTop: "1.5rem",
            }}
          >
            Available in all major browsers and as an app for iPhone, iPad,
            MacOS.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col-1">
            <div className="footer-logo-container">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11.025 15.367C11.025 15.367 11.025 15.367 11.025 15.367L7.697 12.039L8.758 10.978L11.025 13.245L15.242 9.028L16.203 10L11.025 15.367Z"
                  fill="#1A93FE"
                />
              </svg>
              <span className="footer-logo-text" style={{ color: "#fff" }}>
                Transcribe
              </span>
            </div>
            <div className="footer-newsletter">
              <p>Stay informed about updates. You can unsubscribe any time.</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-links-grid">
            <div className="footer-links-group">
              <span className="footer-links-heading">Services</span>
              <a href="#">Audio to Text Transcription</a>
              <a href="#">Automatic Video Transcription</a>
              <a href="#">Audio and Video Summarizer</a>
              <a href="#">Live Transcription Service</a>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-heading">Formats</span>
              <a href="#">Mp3 to Text Converter</a>
              <a href="#">M4a to Text Converter</a>
              <a href="#">Wav to Text Converter</a>
              <a href="#">M4v to Text Converter</a>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-heading">Industries</span>
              <a href="#">Transcribe Podcasts to Text</a>
              <a href="#">Conference Call & Business Meeting Transcriptions</a>
              <a href="#">Academic Transcription Services</a>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-heading">Company</span>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Help Center</a>
              <a href="#">Security & Privacy</a>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-heading">Other</span>
              <a href="#">Pricing</a>
              <a href="#">Case Study</a>
            </div>
          </div>
        </div>
            
      </footer>
    </>
  );
}
