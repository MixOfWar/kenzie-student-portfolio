import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/edit">
          <MakeProfile profiles={userProfiles} />
        </Route>
        <Route exact path='/profile/:id'>
          <Profile profiles={userProfiles} />
        </Route>
      </Switch>
		</div>
	);
}

export default App;
