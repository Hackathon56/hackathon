export function minutesToHtml(data) {
  if (!data) return "<p>No data</p>";

  return `
    <h1 style={color:black; text-shadow: none;}>${data.title}</h1>
    <p><em>${data.date}</em></p>

    <h3>Participants</h3>
    <ul>
      ${data.participants.map((p) => `<li>${p}</li>`).join("")}
    </ul>

    <h3>Agenda</h3>
    <p>${data.agenda}</p>

    <h3>Discussion Points</h3>
    <ul>
      ${data.discussion_points.map((d) => `<li>${d}</li>`).join("")}
    </ul>

    <h3>Decisions</h3>
    <ul>
      ${data.decisions
        .map((d) => `<li><strong>${d.actor}:</strong> ${d.decision}</li>`)
        .join("")}
    </ul>

    <h3>Action Items</h3>
    <ul>
      ${data.action_items
        .map(
          (a) =>
            `<li><strong>${a.actor}:</strong> ${a.task} ${
              a.deadline ? `<em>(Deadline: ${a.deadline})</em>` : ""
            }</li>`
        )
        .join("")}
    </ul>

    <h3>Favorability</h3>
    <ul>
      ${data.favorability
        .map((f) => `<li><strong>${f.actor}:</strong> ${f.stance}</li>`)
        .join("")}
    </ul>
  `;
}
