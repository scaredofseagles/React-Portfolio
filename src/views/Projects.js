import React from "react";
import Card from "../components/Card";
import Navbar from '../components/Navbar'
import burgerscreenshot from "./Assets/Images/burgerscreenshot.png";
import employeemanager from "./Assets/Images/employeemanager.png";
import fandomzscreenshot from "./Assets/Images/fandomzscreenshot.png";
import notespnscreenshot from "./Assets/Images/notespnscreenshot.png";

function Projects() {
  return (
    <div className="row">
		<Navbar />
      	<h1>Projects</h1>

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
        cardimg={burgerscreenshot}
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
  );
}

export default Projects;
