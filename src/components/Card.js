import React from 'react'

function Card(props){
    return(
        <div className="card mb-3" >
            <div className="row g-0">
            <div className="col-md-4">
                <img src={props.cardimg}  className="img-fluid" alt="Project Image"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title"><b>{props.title}</b></h5>
                <p className="card-text">{props.info}</p>
                <div className="btn-group">
                    <a className="deployedBtn btn btn-outline-secondary" href={props.deployed} target="_blank">See it Deployed</a>
                    <a className="repoBtn btn btn-outline-secondary" href={props.repo} target="_blank">See the Repo</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card