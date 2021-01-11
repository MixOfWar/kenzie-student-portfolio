import React from 'react';

const Header = () => {

  return (
		<div className='header'>
			<div>Logo</div>
			<div>
				<input type='text' placeholder='&#128269; Find Something Awesome ...'></input>
			</div>
			<nav>
				<ul>
					<li>Directory</li>
					<li>My Portfolio</li>
					<li>My Assets</li>
					<li>user avatar</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;