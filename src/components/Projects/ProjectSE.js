import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ProjectHero } from '../../Styles.js';

const ProjectSE = (props) => {
  const [project, setProject] = useState({});

	useEffect(() => {
		setProject(props.profiles.find((profile) => profile.id === Number(props.match.params.user_id)).projects.find((project) => project.id === Number(props.match.params.proj_id)) || {});

		// eslint-disable-next-line
  }, [props.match.params.user_id, props.match.params.proj_id]);
  

	return (
		<div>
			<ProjectHero>
        <h1>{project.title}</h1>
        <img className='hero' src={project.images} alt="project"/>
			</ProjectHero>
		</div>
	);
};

export default withRouter(ProjectSE);
