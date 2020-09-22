import React from "react";

function Job({
  title,
  company,
  location,
  startYear,
  endYear,
  highlights,
  skills,
}) {
  return (
    <section className="position">
      <header>
        <h3>
          <span className="title">{title}</span>
          <span className="company">{company}</span>
          <span className="location">{location}</span>
          <span className="timeframe">
            {startYear}-{endYear || "Present"}
          </span>
        </h3>
      </header>
      <article>
        <ul>
          {highlights &&
            highlights.map((hl, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: hl }}></li>
            ))}
        </ul>
      </article>
      <footer className="skills">
        <h4>Skills and tools used:</h4>
        <ul>
          {skills && skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
        </ul>
      </footer>
    </section>
  );
}

export default Job;
