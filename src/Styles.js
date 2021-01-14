import styled from 'styled-components';
import HeaderImage from './assets/HeaderImage.png';

const DirectoryHero = styled.section`
	background-image: linear-gradient(90deg, rgba(242, 244, 248, 0.4), rgba(0, 53, 107, 0.7)), url(${HeaderImage});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	color: white;
	h2 {
		font-size: 24px;
		padding: 50px 0 50px 50%;
	}

	@media (min-width: 750px) {
		h2 {
			padding: 200px 10px 200px 75%;
		}
	}
`;

const ProfileCard = styled.li`
	display: flex;
	align-items: center;
	margin: 25px 0;
	padding: 5px;
	background: #f2f5f8;
	color: #00356b;
	.img {
		width: 200px;
		margin: 0 25px 0 0;
		.avatar {
			width: 150px;
			height: 150px;
			border-radius: 100%;
			margin: auto;
		}
	}
`;

const Tab = styled.h2`
	width: 25%;
	padding: 10px;
	color: white;
	background: #00356b;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 5px 5px black;
`;

const EditButton = styled.button`
	background: white;
	border: 1px solid red;
	color: red;
`;

const SkillList = styled.ul`
	display: flex;
	flex-flow: row wrap;
	margin: 25px auto 10px auto;
	li {
		width: 50%;
		margin: 10px auto;
		text-align: center;
	}
`;

const ProjectSection = styled.section`
	width: 100%;
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ProjectCard = styled.li`
	margin: 50px auto 100px auto;
	text-align: center;
	max-width: 500px;
	img {
		width: 100%;
	}
	p {
		text-align: left;
	}
`;

const ContactSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	h2 {
		width: 75%;
	}
`;

const ProjectHero = styled.section`
	width: 100%;
  padding: 10px;
  text-align: center;
  h1 {
    text-align: left;
  }
  .hero {
    margin: auto;
  }
`;

export {
	DirectoryHero,
	ProfileCard,
	Tab,
	EditButton,
	ProjectSection,
	ProjectCard,
	ContactSection,
	SkillList,
	ProjectHero,
};
