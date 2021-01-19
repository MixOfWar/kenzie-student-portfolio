import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ProjectHero, PictureTextSection, NextStepsContainers, WrapUpSection, ProjectLinks } from '../../Styles.js';

const ProjectUX = (props) => {
	const [project, setProject] = useState({});

	useEffect(() => {
		setProject(
			props.profiles
				.find((profile) => profile.id === Number(props.match.params.user_id))
				.projects.find((project) => project.id === Number(props.match.params.proj_id)) || {},
		);
		// eslint-disable-next-line
	}, [props.match.params.user_id, props.match.params.proj_id]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='projectUX'>
			<ProjectHero>
				<h1>{project.title}</h1>
				<img className='hero' src={project.images} alt='project' />
			</ProjectHero>
			<PictureTextSection>
				<div>
					<h3>Problem Statement</h3>
					<p>{project.problem}</p>
				</div>
				<div>
					<img src={project.problemImg} alt='' />
				</div>
			</PictureTextSection>
			<ProjectHero>
				<h3>Outcome</h3>
				<img src={project.outcomeImg} alt='outcome' />
				<p>{project.outcome}</p>
			</ProjectHero>
			<section className='nextSteps'>
				<h3>Next Steps</h3>
				{project.nextSteps &&
					project.nextSteps.map((step) => (
						<NextStepsContainers>
							<img src={step.image} alt='next step' />
							<p>{step.text}</p>
						</NextStepsContainers>
					))}
			</section>
			<WrapUpSection>
				<h3>Wrap-Up</h3>
				<img src={project.images} alt='project wrap up' />
				<p>{project.outline}</p>
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

export default withRouter(ProjectUX);
