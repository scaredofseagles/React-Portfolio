import React from 'react'

function Card(props){
    return(
        <article class="card col-xl-6">
            <img src={props.cardimg} class="img-fluid projectImg" alt="Fandomzz Project Image"/>
            <header class="card-img-overlay projectCard">
                <h3 class="card-title">{props.title}</h3>
                <p class="projectText card-text">{props.info}</p>
                <a class="deployedBtn btn btn-outline-secondary" href={props.deployed} target="_blank">See it Deployed</a>
                <a class="repoBtn btn btn-outline-secondary" href={props.repo} target="_blank">See the Repo</a>
            </header>
		</article>
    )
}

export default Card