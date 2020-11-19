import React from 'react'

function Contact(){
    return(
        <div class="row">
				<aside class="col col-xl-8">
					<form class="row g-3">
						<div class="col-md-6">
							<label class="form-label" >Name</label>
							<input type="text" class="form-control" />
						</div>
						<div class="col-md-6">
							<label class="form-label">Email</label>
							<input type="text" class="form-control" />
						</div>
						<div class="col-md">
							<label class="form-label">Message</label>
							<textarea class="form-control" class="form-control" rows="6"></textarea>
						</div>
						<div class="btn-group">
							<ul class="btn-group">
								<li>
									<a type="submit" class="primary btn btn-lg btn-primary">Send Message</a>
								</li>
								<li>
									<a type="reset" class="btn btn-lg btn-danger">Clear</a>
								</li>
							</ul>
						</div>
					</form>
				</aside>
				<aside class="col col-xl-3" id="contactMethod">
					<article class="row">
						<div class="contact-method">
							<h3><i class="fas fa-envelope"></i>  Email</h3>
							<a href="#">daileykaze@gmail.com</a>
						</div>
					</article>
					<article class="row">
						<div class="contact-method">
							<h3><i class="fa fa-phone-alt"></i>  Phone Number</h3>
							<span>(647) 237-7720</span>
						</div>
					</article>
					<article class="row">
						<div class="contact-method">
							<h3>Follow Me!</h3>
							<ul class="socialIcons">
								<li>
									<a href="https://twitter.com/dailkaze" target="_blank"><i class="fab fa-2x fa-twitter"></i></a>
								</li>
								<li>
                                    <a href="https://github.com/scaredofseagles" target="_blank"><i class="fab fa-2x fa-github"></i></a>
                                </li>
								<li>
                                    <a href="https://www.linkedin.com/in/daileykaze/" target="_blank"><i class="fab fa-2x fa-linkedin"></i></a>
                                </li>
							</ul>
						</div>
					</article>
				</aside>
			</div>
    )
}

export default Contact