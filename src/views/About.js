import React from "react";
import bannerImg from "./bannerImg.jpg";
import "../components/style.css";
import tempPic from "./tempPic.png";

function About() {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={bannerImg} className="card-img" alt="Hero Image" />
        <div className="card-img-overlay">
          <h1 className="card-title">Hi, My Name is Dailey!</h1>
          <h3 className="card-text">Full Stack Web Developer</h3>
          <a type="button" className="btn btn-outline-dark" href="">
            Resume <i class="fas fa-file-download"></i>
          </a>
        </div>
      </div>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>About Me</h1>
        <div class="row" id="aboutMe">
          <div class="col col-xl-5">
            <img src={tempPic} alt="Profile Image" />
          </div>
          <div
            class="col col-xl-6"
            style={{
              display: "flex",
              alignItems: "center",
              flexFlow: "row wrap",
            }}
          >
            <p class="card-text" id="bannerInfo">
              Full Stack Web Developer with 2+ years of customer service
              experience to add a more user-friendly experience on the web.
              Working towards a certificate in full stack development from the
              University of Toronto, with newly developed skills in React,
              MongoDB, Node.js, and responsive web design.
            </p>
            <p class="card-text">
              Known as a great communicator and a team player motivated to help
              the team reach their goal whilst keeping a positive and enriching
              environment. Positioned to provide unique perspectives with user
              experience and people management in a fast-paced, quality-driven
              team to build cutting-edge web applications and software
              platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
