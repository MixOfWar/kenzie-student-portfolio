import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ProjectHero, Tab, WrapUpSection, ProjectLinks } from '../../Styles.js';

const ProjectSE = (props) => {
	const [project, setProject] = useState({});

	useEffect(() => {
		setProject(
			props.profiles
				.find((profile) => profile.id === Number(props.match.params.user_id))
				.projects.find((project) => project.id === Number(props.match.params.proj_id)) || {},
		);

		// eslint-disable-next-line
	}, [props.match.params.user_id, props.match.params.proj_id]);

	return (
		<div className='projectSE'>
			<ProjectHero>
				<h1>{project.title}</h1>
				<img className='hero' src={project.images} alt='project' />
			</ProjectHero>
			<section className='problem'>
				<Tab>Problem / Solution</Tab>
				<p>{project.problem}</p>
			</section>
			<section className='outline'>
				<Tab>Outline</Tab>
				<p>{project.outline}</p>
			</section>
			<WrapUpSection>
				<h2>Wrap-Up</h2>
				<img src={project.wrapUpImg} alt='project wrap up' />
				<p>{project.wrapUp}</p>
			</WrapUpSection>
			<ProjectLinks>
				<h2>Project Link</h2>
				{project.links &&
					project.links.map((link) => (
						<a target='_blank' href={link} rel='noopener noreferrer'>
							<p>{link}</p>
						</a>
					))}
			</ProjectLinks>
		</div>
	);
};

export default withRouter(ProjectSE);
