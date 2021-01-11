import React, { useState } from 'react';
import './App.css';
import profiles from './profiles.js';
import Header from './components/Header/Header.js';
import MakeProfile from './components/MakeProfile/MakeProfile.js';
import Profile from './components/Profile/Profile.js';


const App = () => {
  const [userProfiles, setUserProfiles] = useState(profiles);
	return (
    <div className='App'>
      <Header />
      <h1>Kenzie Showcase</h1>
      <Profile profiles={userProfiles} />
      <MakeProfile profiles={userProfiles} />
		</div>
	);
}

export default App;
