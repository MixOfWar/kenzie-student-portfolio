import React from 'react';
const logo = require('../../assets/Kenzie_Showcase_Logo.png').default;

const Header = ({ loggedIn }) => {
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='Kenzie Showcase' />
			<input type='text' placeholder='&#128269; Find Something Awesome ...'></input>
			<nav>
				<ul>
					<li>Directory</li>
					<li>My Portfolio</li>
					<li>My Assets</li>
				</ul>
				<img className='loggedAvatar' src={loggedIn.image} alt='user avatar' />
			</nav>
		</div>
	);
};

export default Header;
