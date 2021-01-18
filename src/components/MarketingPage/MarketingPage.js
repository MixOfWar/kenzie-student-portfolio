import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Kenzie_Showcase_Logo from '../../assets/Kenzie_Showcase_Logo.png';
import learn from '../../assets/learn.jpg';
import build from '../../assets/build.jpg';
import present from '../../assets/present.jpg';
import plug_and_play_screenshot from '../../assets/plug_and_play_screenshot.PNG';



const MarketingPage = () => {
	return (
		<div className='marketing'>
			<section className='hero'>
				<div>
					<h1>
						What if you could build <br /> the perfect portfolio,
						<br /> while furthering your <br />
						education in tech?
					</h1>
				</div>
			</section>
			<section className='showcase'>
				<div className='text'>
					<img src={Kenzie_Showcase_Logo} alt='Kenzie Showcase' /> <br /> <br />
					<br />
					<p>With Kenzie Showcase you can now build a world-class portfolio as you complete your Kenzie program!</p>
				</div>
			</section>
			<section className='smarter'>
				<div className='header'>
					<h2> Work smarter, not harder.</h2>
				</div>
				<div className='flex'>
					<div className='learn'>
						<img src={learn} alt='computer on lap' />
						<h3>Learn</h3>
						<p> Dive into UX and software engineering, completing dynamic projects along the way.</p>
					</div>
					<div className='build'>
						<img src={build} alt='notebook paper' />
						<h3>Build</h3>
						<p>
							Add projects to your portfolio as you learn! Kenzie Showcase provides proven layouts that get you hired.
						</p>
					</div>
					<div className='present'>
						<img src={present} alt='young lady taking notes' />
						<h3>Present</h3>
						<p>
							Complete your studies, polish your projects, style your portfolio, and show it off!{' '}
							<strong>Go get that dream role!</strong>
						</p>
					</div>
				</div>
				<div className='footer'></div>
			</section>
			<section className='plug'>
				<div className='text'>
					<h2>Plug & Play</h2>
					<p>
						With Kenzie Showcase, you simply drop your assets right into custom layouts, designed to showcase your
						professional info and project beautifully.
					</p>
				</div>
				<img src={plug_and_play_screenshot} alt='plug and play' />
			</section>
			<section className='develop'>
				<div className='rowOne'>
					<div className='photo1 circle'></div>
					<div className='photo2 circle'></div>
				</div>
				<div className='rowTwo'>
					<div className='photo3 circle'></div>
					<div className='text'>
						<p>
							Develop a Body of Work <br /> Designed to Increase Your <br /> Career Potential
						</p>
					</div>
					<div className='photo4 circle'></div>
				</div>
				<div className='rowThree'>
					<div className='photo5 circle'></div>
					<div className='photo6 circle'></div>
				</div>
			</section>
			<section className='final'>
				<h2>
					Interested? <br /> Click below to <br /> find out more!
				</h2>
				<Link to='/edit/7426'>
					<button type='button'>Get Started!</button>
				</Link>
			</section>

			<div className='footer'></div>
		</div>
	);
};

export default withRouter(MarketingPage);
