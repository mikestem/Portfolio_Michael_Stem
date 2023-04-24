import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../assets/images/Michael-Stem-Resume.docx")} download>
					<h4>Click to Download Resume</h4>
				</a>
			</div>
			<div>
                <h4>Proficiencies</h4>
            <br></br>
				<h5>Front-End</h5>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				</ul>
				<br></br>
				<h5>Back-End</h5>
				<ul>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
				</ul>
				<br></br>
				<h5>Database</h5>
				<ul>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ul>
			</div>
		</section>
	);
}

export default Resume;