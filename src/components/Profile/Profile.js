import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Tab, EditButton, ProjectSection, ProjectCard, ContactSection, SkillList } from '../../Styles.js';

const Profile = (props) => {
	const [thisUser, setThisUser] = useState({});

	useEffect(() => {
		setThisUser(props.profiles.find((profile) => profile.id === Number(props.match.params.id)) || {});

		// eslint-disable-next-line
	}, [props.match.params.id]);

	return (
		<div className='profile'>
			<section className='hero'>
				{props.loggedIn.id === Number(props.match.params.id) ? <EditButton>Edit</EditButton> : null}
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
				<Tab>About Me</Tab>
				<br />
				<p>{thisUser.about}</p>
			</section>
			<section className='skills'>
				<Tab>Skills</Tab>
				<SkillList>{thisUser.skills && thisUser.skills.map((skill) => <li>{skill}</li>)}</SkillList>
			</section>
			<ProjectSection>
				<Tab>Projects</Tab>
				<ul>
					{thisUser.projects &&
						thisUser.projects.map((project) => (
							<Link to={`/profile/${thisUser.id}/${project.type}/${project.id}`}>
								<ProjectCard>
									<img src={project.images} alt='planetary background' />
									<p>{project.title}</p>
									<p>{project.text.substring(0, 150)}</p>
								</ProjectCard>
							</Link>
						))}
				</ul>
			</ProjectSection>
			<ContactSection>
				<div>
					<Tab>Contact Me</Tab>
					<div>
						<p>{thisUser.contact}</p>
						<p>Website Link Here</p>
					</div>
				</div>
				<div>
					<img className='avatar' src={thisUser.image} alt='profile' />
				</div>
			</ContactSection>
		</div>
	);
};

export default withRouter(Profile);
