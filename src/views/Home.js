import React from "react";
import CVDaileyKaze from "./Assets/CVDaileyKaze.pdf";
import Contact from '../views/Contact'

function Home() {

  return (
    <div className="container-fluid">
      <div className="card-img hero"></div>
      <div className="card-img-overlay">
        <h1 className="card-title" style={{fontSize: "56pt"}}>Hi, My Name is Dailey!</h1>
        <h3 className="card-text" style={{fontSize: "42pt"}}>Full Stack Web Developer</h3>
        <a
          type="button"
          className="btn btn-lg btn-dark"
          href={CVDaileyKaze}
          target="_blank"
          rel="noreferrer"
        >
          Resume <i class="fas fa-file-download"></i>
        </a>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
