import React from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import fmsavatar from '../../assets/fms-avatar.jpeg';
const logo = require('../../assets/Kenzie_Showcase_Logo.png').default;

const Header = ({ loggedIn }) => {
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='Kenzie Showcase' />
			<TextField
				type='text'
				id='searchInput'
				name='searchInput'
				margin='dense'
				focused
				helperText='&#128269; Find Something Awesome ...'

			></TextField>
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
