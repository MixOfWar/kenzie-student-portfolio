import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {
	const [thisUser, setThisUser] = useState([]);
	useEffect(
		() => {
			setThisUser(props.profiles.find((profiles) => profiles.id === Number(props.match.params.id)));
		}, // eslint-disable-next-line
		[],
	);

	return (
		<div className='profile'>
			<section className='hero'>
				<div className='miniNav'>
					<ul>
						<li>Projects</li>
						<li>Resume</li>
						<li>Contact Me</li>
					</ul>
				</div>
				<div className='bio'>
					<h1>{thisUser.name}</h1>
					<p>{thisUser.role}</p>
					<img className='avatar' src={thisUser.image} alt='profile' />
				</div>
				<div className='highlight'>
					<p>{thisUser.highlights}</p>
				</div>
			</section>
			<section className='about'>
				<h2 className='tab'>About Me</h2>
				<p>{thisUser.about}</p>
			</section>
			<section className='skills'>
				<h2 className='tab'>Skills</h2>
				{/* <p>{thisUser.skill s.join(', ')}</p> */}
			</section>
			<section className='projects'>
				<h2 className='tab'>Projects</h2>
				<ul>
					{/* {thisUser.projects.map((project) => (
						<li>
							<p>{project.title}</p>
							<p>{project.text.substring(0, 150)}</p>
						</li>
					))} */}
				</ul>
			</section>
			<section className='contact'>
				<h2 className='tab'>Contact Me</h2>
				<div>
					<p>{thisUser.contact}</p>
					<p>Website Link Here</p>
				</div>
				<img className='avatar' src={thisUser.image} alt='profile' />
			</section>
		</div>
	);
};

export default withRouter(Profile);
