import React from 'react'

function About(){
    let BackgroundImage = 'https://hbr.org/resources/images/article_assets/2016/11/nov16-17-499178960.jpg'
    return(
        <div>
            <div className="hero text-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <h1>Pupster</h1>
                <h2>They're the Good Boys and Girls</h2>
            </div>
            <div className="container" style={{ marginTop: 30 }}>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About