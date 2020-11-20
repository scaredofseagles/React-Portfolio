import React from 'react'

function Contact(){
    return(
        <div className="row">
				<aside className="col col-xl-8">
					<form className="row g-3">
						<div className="col-md-6">
							<label className="form-label" >Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md">
							<label className="form-label">Message</label>
							<textarea className="form-control" className="form-control" rows="6"></textarea>
						</div>
						<div className="btn-group">
							<ul className="btn-group">
								<li>
									<a type="submit" className="primary btn btn-lg btn-primary">Send Message</a>
								</li>
								<li>
									<a type="reset" className="btn btn-lg btn-danger">Clear</a>
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
    )
}

export default Contact