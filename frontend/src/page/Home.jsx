import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleStartNowClick = () => {
    navigate("/Sum");
  };
  return (
    <>
      <div className="container-hero">
        <h1 className="hero-heading">AI Meeting Minutes Generator</h1>
        <p className="hero-subheading" style={{ color: "white" }}>
          Capture every detail. Summarize in seconds. Share with ease.
        </p>
        <button
          type="button"
          className="btn-hero"
          onClick={handleStartNowClick}
        >
          Start Now
        </button>
        <div className="image-gallery">
          <img src={imag1} alt="first" id="start" />
          <img
            src={imag2}
            alt="center"
            id="mid"
            style={{ marginRight: "10px" }}
          />
          <Link to="/Sum">
            <img src={imag3} alt="last" id="last" />
          </Link>
        </div>
      </div>
    </>
  );
}
