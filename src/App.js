import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import profiles from './profiles.js';
import Header from './components/Header/Header.js';
import MarketingPage from './components/MarketingPage/MarketingPage.js';
import MakeProfile from './components/MakeProfile/MakeProfile.js';
import Profile from './components/Profile/Profile.js';
import ProjectSE from './components/Projects/ProjectSE.js';
import ProjectUX from './components/Projects/ProjectUX.js';
import Directory from './components/Directory/Directory.js';

const App = () => {
	// eslint-disable-next-line
	const userProfiles = useState(profiles);
	// eslint-disable-next-line
	const loggedIn = useState(profiles[0]);

	return (
		<div className='App'>
			<Header loggedIn={loggedIn} />
			<Switch>
				<Route exact path='/'>
					<MarketingPage />
				</Route>
				<Route exact path='/edit/:id'>
					<MakeProfile profiles={userProfiles} />
				</Route>
				<Route exact path='/profile/:id'>
					<Profile profiles={userProfiles} loggedIn={loggedIn} />
				</Route>
				<Route exact path='/directory'>
					<Directory profiles={userProfiles} />
				</Route>
				<Route exact path='/profile/:user_id/0/:proj_id'>
					<ProjectSE profiles={userProfiles} />
				</Route>
				<Route exact path='/profile/:user_id/1/:proj_id'>
					<ProjectUX profiles={userProfiles} />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
