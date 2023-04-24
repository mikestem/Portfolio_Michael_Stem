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
					I am currently a student in a full stack bootcamp with the University of Penn where I've developed skills in JavaScript, CSS, ReactJS, NodeJS, MySQL, Sequelize and many others. I'm a graduate of West Chester University and now reside in Norristown, PA. I've spend the last 10 years in the medical and sports industries using my customer service skills in billing and collections. Click on the Resume section of this Portfolio to download my latest resume.
				</p>
			</div>
		</section>
	);
}

export default About;

