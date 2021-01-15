import { FormatAlignCenter } from '@material-ui/icons';

const userProfiles = [
	{
		id: 7426,
		name: 'Fredo Sieck',
		image: require('./assets/fms-avatar.jpeg').default,
		role: 'UX Designer / Front End Dev',
		cohort: 'UX6 January-2020',
		about:
			'Multi-talented creative individual with a deep desire for discovering new ideas, concepts, and efficient logical workflows',
		highlights: 'Persevering in a time of uncertainty and anguish',
		skills: ['Efficiency', 'Empathy', 'HTML', 'CSS', 'Video production', 'Music production'],
		education: [],
		projects: [
			{
				type: 0,
				id: 1,
				title: 'Minerva',
				outline: 'Ethically-sourced e-commerce website',
				problem: 'Find a way to ethically source an e-commerce website',
				wrapUp:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo turpis, dapibus eget lectus at, pellentesque aliquam tellus. Pellentesque ut pulvinar quam. Duis eget eros eu mauris iaculis bibendum.',
				wrapUpImg: require('./assets/minerva2.png').default,
				images: [require('./assets/minerva1.png').default],
				links: [],
			},
		],
		contact: 'fmsieck@gmail.com',
	},
	{
		id: 9181,
		name: 'Mia Peace',
		image: require('./assets/miapeace.jpg').default,
		role: 'Front End Developer',
		cohort: 'UX6 January-2020',
		about:
			'Cultivating a passion for technology from a young age I have pushed myself to focus on the visual format as well as the accessibility of technology. Moving forward within this world requires that we carefully tend to the way content is presented to reach many and encourage the development of a table that not only includes all but bolsters diversity. Through this strategy, we enrich the environment around us and nourish new innovative ideas to move technology forward. Beyond my love for technology, I am a disability advocate, an outdoor enthusiast, a reader, a writer, a dancer, and a singing lover of life. I know that by keeping our lives rounded and our mind entrenched in learning we can move forward in a positive way, bringing out not only the best in ourselves but in those around us. My goals are to be a decisive designer and a valuable team member always striving for not only my best but the best from my team. I enjoy working with others and love when design can be refined within an attainable scope.',
		highlights:
			'Tutor/Coach at Kenzie as well as Student Committee Member, Previously taught HTML, CSS and JS, Took on Advanced Course Curriculum',
		skills: ['HTML', 'CSS', 'SASS', 'SCSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
		education: [
			{
				title: 'UX Designer',
				company: 'Kenzie Academy',
				from: '01/28/2020',
				to: '07/24/2020',
			},
			{
				title: 'Front End Developer',
				company: 'Kenzie Academy',
				from: '07/24/2020',
				to: '01/22/2021',
			},
		],
		projects: [
			{
				type: 0,
				id: 1,
				title: 'My example project',
				outline:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo turpis, dapibus eget lectus at, pellentesque aliquam tellus. Pellentesque ut pulvinar quam. Duis eget eros eu mauris iaculis bibendum. Etiam vulputate elementum augue, non iaculis arcu laoreet et. Mauris et vulputate lorem, in auctor orci. Fusce eget nibh eget lorem vulputate condimentum ornare fermentum magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean varius dui et faucibus porttitor. Ut sit amet vulputate orci. Vestibulum consequat arcu et metus dapibus, ut elementum neque volutpat.',
				problem:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo turpis, dapibus eget lectus at, pellentesque aliquam tellus. Pellentesque ut pulvinar quam. Duis eget eros eu mauris iaculis bibendum. Etiam vulputate elementum augue, non iaculis arcu laoreet et. Mauris et vulputate lorem, in auctor orci. Fusce eget nibh eget lorem vulputate condimentum ornare fermentum magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean varius dui et faucibus porttitor. Ut sit amet vulputate orci. Vestibulum consequat arcu et metus dapibus, ut elementum neque volutpat.',
				wrapUp:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo turpis, dapibus eget lectus at, pellentesque aliquam tellus. Pellentesque ut pulvinar quam. Duis eget eros eu mauris iaculis bibendum.',
				wrapUpImg: require('./assets/nebula.jpg').default,
				images: [require('./assets/planetary_background.jpg').default],
				links: ['https://thesilentwars.netlify.app/', 'https://github.com/mrssilentwar/kenzie-student-portfolio'],
			},
		],
		contact: 'mrssilentwar@gmail.com',
	},
	{
		id: 528,
		name: 'Ryne Tate',
		image: require('./assets/rynetate-avatar.JPG').default,
		role: 'UX Designer/Front-End Developer',
		cohort: 'UX6 January-2020',
		about: '30-something toy geek. Analytical and social.',
		highlights: 'Managed to graduate from Kenzie Academy during a pandemic. Watched all of Star Wars Rebels.',
		skills: ['Background in data analysis', 'Comfortable as project manager', 'Growing knowledge in CSS, JS, & React'],
		education: [
			{
				title: 'Bachelor of Arts',
				company: 'Monmouth College',
			},
		],
		projects: [
			{
				type: 1,
				id: 1,
				title: 'Forage',
				problem:
					'Finding action figures can be incredibly difficult with highly demanded and often store exclusive items. We need a way for collectors to help each other by surveying their local stores and notifying other users when items they desire are nearby.',
				problemImg: require('./assets/Forage-CrowdSearch.png').default,
				outline:
					'An app designed for collectors to crowdsource finding and obtaining new items and to keep an updated inventory of their collection to share with each other.',
				images: require('./assets/Forage.png').default,
				process: [
					{
						text:
							'It was difficult to come up with a way to neatly display so many items in a way that is not overwhelming to the eye.',
						image: require('./assets/Forage-Hooks.png').default,
					},
					{
						text: 'The process though did teach me of better ways to categorize items and filter them.',
						image: require('./assets/Forage-CrowdSearch.png').default,
					},
				],
				outcome:
					'Forage will aid collectors in attaining and maintaining their collections in a fun and repeatable process.',
				outcomeImg: require('./assets/Forage.png').default,
				nextSteps: [
					{
						text: 'I would try to find ways to disincentivize fraud by users.',
						image: require('./assets/Forage-CrowdSearch.png').default,
					},
					{
						text: 'I learned how a long user flow might work and create a useful and appealing loop for the user.',
						image: require('./assets/Forage-Hooks.png').default,
					},
				],
				links: [],
			},
		],
		contact: 'rynetate@gmail.com',
	},
	{
		id: 394,
		name: 'Jordan Burke',
		image: require('./assets/jordanburke.jpeg').default,
		role: 'UX Designer/ Front-End Dev',
		cohort: 'UX6 January-2020',
		about:
			'I am a UX Engineer with a background in graphic design! I enjoy getting to the bottom of difficult problems and creating human centered solutions! ',
		highlights: '',
		skills: [
			'Adobe Illustrator',
			'Adobe Photoshop',
			'Adobe XD',
			'Adobe InDesign',
			'Sketch',
			'Figma',
			'HTML',
			'CSS',
			'JavaScript',
		],
		education: [
			{
				title: 'Art & Design',
				company: 'Rocky Mountain College of Art & Design',
			},
			{
				title: 'Digital Marketing & Sales',
				company: 'GreenFig',
			},
			{
				title: 'Development',
				company: 'General Assembly',
			},
			{
				title: 'UX Designer',
				company: 'Kenzie Academy',
				from: '01/28/2020',
				to: '07/24/2020',
			},
			{
				title: 'Front End Developer',
				company: 'Kenzie Academy',
				from: '07/24/2020',
				to: '01/22/2021',
			},
		],
		projects: [
			{
				type: 1,
				id: 1,
				title: 'Skipline',
				problem: '',
				problemImg: '',
				outline:
					'SkipLine, the premier virtual ticketing and payment system for events! Event attendees get tickets, purchase merchandise and concessions all in one place! Event managers create and edit new events in real time.',
				images: '',
				process: [
					{
						text: '',
						image: '',
					},
					{
						text: '',
						image: '',
					},
				],
				outcome:
					'This project was both challenging and rewarding in that it really forced me to think through every step of my design process. It was critical that the needs of each user type be addressed from a singular point of view even though we were creating a single solution for both. In terms of working on a team, from whiteboard to final product, it was important to quickly assess the strengths of each of my team members and figure out how to mesh our varying design styles and preferences quickly. Communicating with the product manager with specific questions allowed us to walk away from those meetings with a clear understanding of what the next steps would be, and who would be assigned each task. I found that while the work and the content is crucial to the final product, expressing empathy towards my team members, down to the times we would meet with consideration to outside obligations, was a great part of our success as a team.',
				outcomeImg: '',
				nextSteps: [
					{
						text: '',
						image: '',
					},
					{
						text: '',
						image: '',
					},
				],
				links: ['https://docs.google.com/presentation/d/1iIFPfuepp6efOr-AJnB2ja-wXy34qF7gZQR8WOtu6Qg/edit?usp=sharing'],
			},
		],
		contact: 'jordan.burke394@gmail.com',
	},
	{
		id: 1129,
		name: 'Natassja Jordan',
		image: require('./assets/NatassjaJordan.jpg').default,
		role: 'UX Design',
		cohort: 'UX6 January-2020',
		about:
			'A UX Designer with a background in Media & Entertainment. Natassja uses her experience leading teams and creating content to craft intuitive, digital experiences.',
		highlights: '',
		skills: ['HTML', 'CSS', 'SASS', 'SCSS', 'JavaScript', 'React'],
		education: [],
		projects: [
			{
				type: 0,
				id: 1,
				title: 'My example project',
				outline: '',
				problem: '',
				wrapUp: '',
				wrapUpImg: '',
				images: [],
				links: [],
			},
		],
		contact: '',
	},
];

export default userProfiles;
