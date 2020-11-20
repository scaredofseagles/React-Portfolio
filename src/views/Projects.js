 import React from 'react'
 import burgerscreenshot from './Assets/Images/burgerscreenshot.png'
 import employeemanager from './Assets/Images/employeemanager.png'
 import fandomzscreenshot from './Assets/Images/fandomzscreenshot.png'
 import notespnscreenshot from './Assets/Images/notespnscreenshot.png'

 function Projects(){
    return(
        <div className="row">
            <h1>Projects</h1>
            <article id="cardOne" class="card col-xl-6">
				<img src={fandomzscreenshot} class="img-fluid projectImg" alt="Fandomzz Project Image"/>
				<header class="card-img-overlay projectCard">
					<h3 class="card-title">Fandomzz</h3>
					<p class="projectText card-text">An e-commerce website for purchasing and selling fan merchandise using full stack web technologies.</p>
					<a class="deployedBtn btn btn-outline-secondary" href="https://stormy-depths-87128.herokuapp.com/" target="_blank">See it Deployed</a>
					<a class="repoBtn btn btn-outline-secondary" href="https://github.com/scaredofseagles/Fandomzzz" target="_blank">See the Repo</a>
				</header>
			</article>
			
			<article id="cardTwo" class="card col-xl-6">
				<img src={notespnscreenshot} class="img-fluid projectImg" alt="NotESPN Project Image"/>
				<header class="card-img-overlay projectCard">
					<h3 class="card-title">NotESPN</h3>
					<p class="projectText card-text">A web application for sports enthusiasts to view up to date player information and statistics.</p>
					<a class="deployedBtn btn btn-outline-secondary" href="https://npcoding25.github.io/Project-1/" target="_blank">See it Deployed</a>
					<a class="repoBtn btn btn-outline-secondary" href="https://github.com/scaredofseagles/NotESPN" target="_blank">See the Repo</a>
				</header>
			</article>
			
			<article id="cardThree" class="card col-xl-6">
				<img src={burgerscreenshot} class="img-fluid projectImg" alt="Eat Da Burger Project Image"/>
				<header class="card-img-overlay projectCard">
					<h3 class="card-title">Eat Da Burger</h3>
					<p class="projectText card-text">A web application that takes a burger from the user, then adds the burger to a waiting room waiting to be devoured. </p>
					<a class="deployedBtn btn btn-outline-secondary" href="https://arcane-anchorage-18876.herokuapp.com/" target="_blank">See it Deployed</a>
					<a class="repoBtn btn btn-outline-secondary" href="https://github.com/scaredofseagles/Eat-Da-Burger" target="_blank">See the Repo</a>
				</header>
			</article>
			
			<article id="cardFour" class="card col-xl-6">
				<img src={employeemanager} class="img-fluid projectImg" alt="Employee Manager Project Image"/>
				<header class="card-img-overlay projectCard">
					<h3 class="card-title">Employee Manager</h3>
					<p class="projectText card-text">A CLI application that manages employee, role, and departmental information and logs it to a database to save for future use.</p>
					<a class="repoBtn btn btn-outline-secondary" href="https://github.com/scaredofseagles/Employee-Manager" target="_blank">See the Repo</a>
				</header>
			</article>
        </div>
    )
 }

 export default Projects