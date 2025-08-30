import "./About.css";

function About() {
  return (
    <>
      <section id="about">
        <h1>About Us</h1>
        <p>
          We are a passionate hackathon team building innovative solutions with
          AI, web, and modern tech 🚀
        </p>
      </section>

      <section id="team">
        <h2>Meet Our Team</h2>
        <div className="cards">
          <div className="card">
            <h3>Anubhav Singh</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="card">
            <h3>Harsh Nerpagar</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="card">
            <h3>Sumit Gaud</h3>
            <p>Backend developer</p>
          </div>
          <div className="card">
            <h3>Priyanka Gandhi</h3>
            <p>Designer+frontend dev.</p>
          </div>
          <div className="card">
            <h3>Parth Shah</h3>
            <p>Designer</p>
          </div>
        </div>
      </section>

      <section id="timeline">
        <h2>Our Journey</h2>
        <div className="timeline">
          <ul>
            <li>
              <span>2023</span> - Started as an idea
            </li>
            <li>
              <span>2024</span> - First Hackathon Win
            </li>
            <li>
              <span>2025</span> - Built AI-powered tools
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
