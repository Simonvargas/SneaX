import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Navigation/NavBar';

import './SplashPage.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);

    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
    <NavBar />
    <div className='splash-container'>
      <div className='splash-info-container'>
          <h1> Investing for Everyone</h1>
          <h3>Commission free investing, plus the tools you need to put your money in motion.
          </h3>
      </div>
      <div className='splash-info-container'>
          <img className='shoe-pic' src="https://i.imgur.com/YWIcguO.png"></img>
      </div>
    </div>
    <div className='second-splash-container'>
    </div>
    </>
  );
}
export default User;
