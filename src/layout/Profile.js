import React from 'react';

import ProfileImage from '../images/profile.jpg';

import './profile.css';

const Profile = () => (
  <div className='Profile'>
    <div className='Profile__image'>
      <img src={ProfileImage} />
    </div>
    <div className="Profile__name">
      <h1>Stefan Kuprešak</h1>
      <span>No task in progress</span>
    </div>
  </div>
);

export default Profile;