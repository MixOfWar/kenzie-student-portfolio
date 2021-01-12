import React from 'react';

const Directory = ({ profiles }) => {
	return (
		<div className='Directory'>
			<section className='directoryHero'>
				img
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien eget vulputate vitae iaculis. Facilisi
					nunc sit consequat orci in quam velit eleifend molestie.
				</p>
			</section>
			<section className='users'>
				<ul>
					{profiles.map((profile) => (
						<li key={profile.id}>
							<img className='avatar' src={profile.image} alt={profile.name} />
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default Directory;
