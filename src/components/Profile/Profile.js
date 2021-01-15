import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Tab, EditButton, ProjectSection, ProjectCard, ContactSection, SkillList } from '../../Styles.js';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

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
				<Tab>
					<AccountCircleOutlinedIcon color='primary' />
					About Me
				</Tab>
				<br />
				<p>{thisUser.about}</p>
			</section>
			<section className='skills'>
				<Tab>
					<EmojiEventsOutlinedIcon />
					Skills
				</Tab>
				<SkillList>{thisUser.skills && thisUser.skills.map((skill) => <li>{skill}</li>)}</SkillList>
			</section>
			<ProjectSection>
				<Tab>
					<WorkOutlineOutlinedIcon />
					Projects
				</Tab>
				<ul>
					{thisUser.projects &&
						thisUser.projects.map((project) => (
							<Link to={`/profile/${thisUser.id}/${project.type}/${project.id}`}>
								<ProjectCard>
									<img src={project.images} alt='project main' />
									<p>{project.title}</p>
									<p>{project.outline.substring(0, 150)}</p>
								</ProjectCard>
							</Link>
						))}
				</ul>
			</ProjectSection>
			<ContactSection>
				<div>
					<Tab>
						<PhoneOutlinedIcon />
						Contact Me
					</Tab>
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
