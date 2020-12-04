import React from "react";
import {NavLink} from 'react-router-dom'

function Navbar() {

  return (
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

