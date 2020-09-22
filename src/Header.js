import React from "react";
import pdf from "./images/document.png";

function Header({ person }) {
  return (
    <header className="container ">
      <span className="paperclip"></span>
      <img
        src={person.gravatar}
        alt={person.name}
        className="photo drop-shadow lifted"
      />
      <h1 className="clearfix">
        {person.name} <small>{person.title}</small>
      </h1>
      <section className="row">
        <article className="bio">
          <h2>Who am I?</h2>
          <p>{person.bio}</p>
        </article>
        <article className="contact-info">
          <h2>Contact Info</h2>
          <div id="hcard-Michael-Kelly" className="vcard">
            <span className="fn">{person.name}</span>
            <a className="email" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <div className="adr">
              <span className="locality">{person.city}</span>,
              <span className="region">{person.state}&nbsp;</span>
              <span className="country-name">USA</span>
            </div>
            <div className="tel">{person.phone}</div>
          </div>
        </article>
      </section>
      <nav>
        <a id="pdf_download" href={`/files/${person.pdf}`}>
          <img
            src={pdf}
            alt={`${person.name}'s Resume as PDF`}
            className="drop-shadow"
          />
          <span>Download as PDF</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
