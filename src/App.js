import "./css/base.css";
import "./css/dropshadows.css";
import "./css/resume.css";

import Credentials from "./Credentials";
import Header from "./Header";
import Job from "./Job";
import React from "react";
import resume from "./resume";

function App() {
  let jobs = resume.jobs.map((job, idx) => <Job {...job} key={idx} />);

  return (
    <div className="App">
      <Header person={resume} />
      <div id="experience_container" class="container">
        <div className="row">
          <div id="experience">
            <h2>Experience</h2>
            {jobs}
          </div>
        </div>
      </div>
      <Credentials person={resume} />
    </div>
  );
}

export default App;
