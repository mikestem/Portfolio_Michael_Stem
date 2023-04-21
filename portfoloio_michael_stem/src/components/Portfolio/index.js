import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'State Park Excursion',
			description:
				'This application will allow you to enter your location and pick any state park in the United States and see how far you are from that park. You will also be able to retrieve information about the State Park so you can plan your trip with confidence!',
            image: 'State-Park-Excursion.png',
			github: 'https://github.com/mikestem/state-park-excursion',
			deployed: 'https://miacias.github.io/state-park-excursion/',
		},
		{
			name: 'Travel Together',
			description:
				'With this application you can create a trip for you and your group so everyone arrives at the same airport around the same time. Pick at destination and search flights for each member of your party!',
			image: 'Travel-Together.png',
			github: 'https://github.com/mikestem/Travel_Together_Project-Two',
			deployed: 'https://enigmatic-inlet-20421.herokuapp.com/',
		},
		{
			name: 'Fancy Tech Blog',
			description:
				'This blogging application allows a user to sign up, blog their thoughts, find friends and comment on other blogs. You can update or delete your previous posts with the click of a button. Sharing your thoughts has never been easier.',
			image: 'Tech-Blog.png',
			github: 'https://github.com/mikestem/Fancy_Tech_Blog',
			deployed: 'https://secure-everglades-67075.herokuapp.com/',
		},
		{
			name: 'Weather Genius',
			description:
				'Check the 5-day weather forecast for any city in the world! Get back the temperature, humidity and wind speed. It will also save your recent searches for quick access to past cities. You will be prepared knowing what is coming.',
			image: 'Weather-Genius.png',
			github: 'https://github.com/mikestem/Weather-Genius',
			deployed: 'https://mikestem.github.io/Weather-Genius/',
		},
		{
			name: 'Fantastic Scheduler',
			description:
				'With this day scheduler you will be able to add appointments and any to-dos that need to be done throughout your day. Want to take the day off? Just use the Clear My Schedule button and now you are free!',
			image: 'Fantastic-Scheduler.png',
			github: 'https://github.com/mikestem/Fantastic-Scheduler',
			deployed: 'https://mikestem.github.io/Fantastic-Scheduler/',
		},
		{
			name: 'Password Generator',
			description:
				'Need a random password between 8-128 charaters? This app is for you! You can choose whether you want uppercase, lowercase and special characters. Password generator are good for choosing a password no one will find out.',
			image: 'Password-Generator.png',
			github: 'https://github.com/mikestem/Password-Generator',
			deployed: 'https://mikestem.github.io/Password-Generator/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;