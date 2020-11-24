import React from "react";
import "../components/style.css";
import tempPic from "./Assets/Images/tempPic.png";
import Image from 'react-bootstrap/Image'
import CVDaileyKaze from "./Assets/CVDaileyKaze.pdf";
import Contact from '../views/Contact'

function About(){
    return(
        <div className="container">
            <h1 style={{ display: "flex", justifyContent: "center" }}>About Me</h1>
            <div class="row" id="aboutMe" style={{paddingBottom: "5%", marginBotton: "0px", borderBottom: "4px solid gray"}}>
                <div class="col col-xl-5">
                    <Image src={tempPic} alt="Profile Image" roundedCircle />
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
                    <p class="card-text">
                        Would like to know more about me? Find more info in my <a href={CVDaileyKaze} target="_blank">resume.</a>
                    </p>
                </div>
            </div>
            <Contact/>
       </div>
    )
}

export default About