import React from "react";
import "./style.css";
import {NavLink} from 'react-router-dom'

function Navbar() {

  return (
    // <nav className={classes.root} style={{position: "absolute", top: "0px", marginRight: "0px"}}>
    //   <ul className="navigation">
    //     <li><NavLink to="/"><Button color="primary">Home</Button></NavLink></li>
    //     <li><NavLink to="/projects"><Button color="primary">Projects</Button></NavLink></li>
    //     <li><NavLink to="/about"><Button color="primary">About</Button></NavLink></li>
    //     <li><NavLink to="/contact"><Button color="primary">Contact</Button></NavLink></li>
    //   </ul>
    // </nav>
    <nav class="navbar navbar-expand-sm fixed-top navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Dailey Kaze</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><NavLink class="nav-link" to="/">Home</NavLink></li>
            <li class="nav-item"><NavLink class="nav-link" to="/projects">Projects</NavLink></li>
            <li class="nav-item"><NavLink class="nav-link" to="/about">About</NavLink></li>
            {/* <li class="nav-item"><NavLink class="nav-link" to="/contact">Contact</NavLink></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

