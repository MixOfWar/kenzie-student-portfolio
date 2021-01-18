import React from 'react';
import { NavLink } from 'react-router-dom';
import fmsavatar from '../../assets/fms-avatar.jpeg';
const logo = require('../../assets/Kenzie_Showcase_Logo.png').default;

const Header = ({ loggedIn }) => {
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='Kenzie Showcase' />
			<input type='text' placeholder='&#128269; Find Something Awesome ...'></input>
			<nav>
				<ul>
					<NavLink exact to='/directory'>
						Directory
					</NavLink>
					<NavLink exact to='/profile/7426'>
						My Portfolio
					</NavLink>
					<NavLink exact to='/'>
						My Assets
					</NavLink>
				</ul>
				<img className='loggedAvatar' src={fmsavatar} alt='user avatar' />
			</nav>
		</div>
	);
};

export default Header;
