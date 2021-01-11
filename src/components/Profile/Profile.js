import React from 'react';

const Profile = ({ profiles }) => {
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
					<h1>{   .name}</h1>
					<p>{profiles[1].role}</p>
					<img src={profiles[1].image} alt='profile' />
				</div>
				<div className='highlight'>
					<p>{profiles[1].highlights}</p>
				</div>
			</section>
			<section className='about'>
				<h2 className='tab'>About Me</h2>
				<p>{profiles[1].about}</p>
			</section>
			<section className='projects'>
				<h2 className='tab'>Projects</h2>
				<div className='image'>Project Image here</div>
				<p>{profiles[1].projects[0].title}</p>
				<p>{profiles[1].projects[0].text.substring(0, 150)}</p>
			</section>
			<section className='contact'>
				<h2 className='tab'>Contact Me</h2>
				<div>
					<p>{profiles[1].contact}</p>
					<p>Website Link Here</p>
				</div>
				<div>User Image Here</div>
			</section>
		</div>
	);
};

export default Profile;
