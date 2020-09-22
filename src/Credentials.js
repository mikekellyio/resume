import React from "react";

function Credentials({ person }) {
  return (
    <div class="container">
      <section class="education">
        <h2>Education</h2>
        <p>{person.education}</p>
      </section>
      <section class="clearance">
        <h2>Clearance</h2>
        <p>{person.clearance}</p>
      </section>
    </div>
  );
}

export default Credentials;
