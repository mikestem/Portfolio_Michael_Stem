import React from 'react';

function About() {
	return (
		<section>
			<div className="center">
				<img
					src={require('../assets/images/head-shot.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div>
				<p>
					I am currently a student in a full stack bootcamp with the University of Penn.
				</p>
			</div>
		</section>
	);
}

export default About;

