import React from "react";

function About() {
  return (
    <div class="container p-4 bg-white text-black rounded mt-5">
      <section class="milestones">
        <h1 class="main-heading">Milestones</h1>
        <div class="milestones-timeline">
          <div class="milestone-item">
            <div class="milestone-year">2025</div>
            <div class="milestone-content">
              <ul>
                <li>
                  Transcript summaries and translations were added to our iOS
                  and macOS apps.
                </li>
                <li>
                  We gave the platform a full UI/UX overhaul across devices.
                </li>
                <li>
                  Real-time transcriptions became available in the web editor.
                </li>
                <li>Our user base reached 1.5 million!</li>
              </ul>
            </div>
          </div>
          <div class="milestone-item">
            <div class="milestone-year">2024</div>
            <div class="milestone-content">
              <ul>
                <li>
                  We added new third-party integrations, including Zapier,
                  making it easier to connect Transcribe with the rest of your
                  workflow.
                </li>
                <li>
                  We added experimental AI features to the web editor, including
                  transcript summaries and translations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default About;
