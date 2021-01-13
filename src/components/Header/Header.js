import React from 'react';
import { NavLink } from 'react-router-dom';
const logo = require('../../assets/Kenzie_Showcase_Logo.png').default;

const Header = ({ loggedIn }) => {
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='Kenzie Showcase' />
			<input type='text' placeholder='&#128269; Find Something Awesome ...'></input>
			<nav>
				<ul>
					<NavLink exact to='/directory'>Directory</NavLink>
					<NavLink exact to='/profile/7426'>My Portfolio</NavLink>
					<li>My Assets</li>
				</ul>
				<img className='loggedAvatar' src={loggedIn.image} alt='user avatar' />
			</nav>
		</div>
	);
};

export default Header;
