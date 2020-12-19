import React, { useState } from 'react'

function Contact(){
	const [state, setState] = useState({
		name: '',
		email: '',
		message: ''
	})

	function sendEmail(event){
		event.preventDefault()
	}

	function handleInputChange(event){
		const {name, value} = event.target


		setState({
			...state,
			[name]: value
		})
	}

    return(
		<div className="container">
			<div className="row" style={{marginTop: "5%"}}>
				<h1 style={{marginBottom: "3%"}}>Contact Me</h1>
				<aside className="col col-xl-8">
					<form onSubmit={sendEmail} className="row g-3" name="contact" //TODO: remove => method="POST" data-netlify="true"
					>
						<div className="col-md-6">
							<label className="form-label" >Name</label>
							<input onChange={handleInputChange} type="text" name="name"  value={state.name} className="form-control" />
						</div>
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input onChange={handleInputChange} type="text" name="email" value={state.email} className="form-control" />
						</div>
						<div className="col-md">
							<label className="form-label">Message</label>
							<textarea onChange={handleInputChange} className="form-control" name="message" value={state.message} className="form-control" rows="6"></textarea>
						</div>
						<div className="btn-group">
							<ul className="btn-group">
								<li>
									<a type="submit" className="primary btn btn-lg btn-primary">Send</a>
								</li>
							</ul>
						</div>
					</form>
				</aside>
				<aside className="col col-xl-3" id="contactMethod">
					<article className="row">
						<div className="contact-method">
							<h3><i className="fas fa-envelope"></i>  Email</h3>
							<a href="#">daileykaze@gmail.com</a>
						</div>
					</article>
					<article className="row">
						<div className="contact-method">
							<h3><i className="fa fa-phone-alt"></i>  Phone Number</h3>
							<span>(647) 237-7720</span>
						</div>
					</article>
					<article className="row">
						<div className="contact-method">
							<h3>Follow Me!</h3>
							<ul className="socialIcons">
								<li>
									<a href="https://twitter.com/dailkaze" target="_blank"><i className="fab fa-2x fa-twitter"></i></a>
								</li>
								<li>
                                    <a href="https://github.com/scaredofseagles" target="_blank"><i className="fab fa-2x fa-github"></i></a>
                                </li>
								<li>
                                    <a href="https://www.linkedin.com/in/daileykaze/" target="_blank"><i className="fab fa-2x fa-linkedin"></i></a>
                                </li>
							</ul>
						</div>
					</article>
				</aside>
			</div>
		</div>
        
    )
}

export default Contact