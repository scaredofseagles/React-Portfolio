import React from "react";
import Card from "../components/Card";
import burgerscreenshot from "./Assets/Images/burgerscreenshot.png";
import employeedirectoryscreenshot from "./Assets/Images/employeedirectoryscreenshot.png";
import googlebooksscreenshot from './Assets/Images/googlebooksscreenshot.png'
import fandomzscreenshot from "./Assets/Images/fandomzscreenshot.png";
import notespnscreenshot from "./Assets/Images/notespnscreenshot.png";

function Projects() {
  return (
    <div className="container">
      
      <div class="languageCard" style={{display: "flex", flexDirection: "row", width: "100vh"}}>
        <h1>Projects</h1>
				<i class="languageIcon fab fa-3x fa-html5"></i>
				<i class="languageIcon fab fa-3x fa-css3-alt"></i>
				<i class="languageIcon fab fa-3x fa-js-square"></i>
				<i class="languageIcon fab fa-3x fa-node-js"></i>
				<i class="languageIcon fas fa-3x fa-database"></i>
				<i class="languageIcon fab fa-3x fa-react"></i>
			</div>
      <div className="row">
        
        <Card
          cardimg={fandomzscreenshot}
          title="Fandomzz"
          info="An e-commerce website for purchasing and selling fan merchandise using full stack web technologies."
          deployed="https://stormy-depths-87128.herokuapp.com/"
          repo="https://github.com/scaredofseagles/Fandomzzz"
        />

        <Card
          cardimg={notespnscreenshot}
          title="NotESPN"
          info="A web application for sports enthusiasts to view up to date player
      information and statistics."
          deployed="https://npcoding25.github.io/Project-1/"
          repo="https://github.com/scaredofseagles/NotESPN"
        />

        <Card
          cardimg={googlebooksscreenshot}
          title="Google Books Search"
          info="A web application that queries and displays books that the user can save to view later or delete from their saved list."
          deployed="https://fast-brook-62371.herokuapp.com/"
          repo="https://github.com/scaredofseagles/Google-Books-Search"
        />


        <Card
          cardimg={employeedirectoryscreenshot}
          title="Employee Directory"
          info="A web application that lists all employees in one directory using React."
          deployed="https://scaredofseagles.github.io/Employee-Directory/"
          repo="https://github.com/scaredofseagles/Employee-Directory"
        />

        <Card
          cardimg={burgerscreenshot}
          title="Eat Da Burger"
          info="A web application that takes a burger from the user, then adds the
      burger to a waiting room waiting to be devoured."
          deployed="https://arcane-anchorage-18876.herokuapp.com/"
          repo="https://github.com/scaredofseagles/Eat-Da-Burger"
        />

      </div>
    </div>
    
  );
}

export default Projects;
