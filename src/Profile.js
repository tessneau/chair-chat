import React from 'react';
import './Profile.scss'

const Profile = ({ username, profile_picture }) => {

    return (
      <div className="profile">
      <h3>{username}</h3>
      <div className="profile__picture">
      <img src={profile_picture} width="100" alt="chair_me"/>
      </div>
      </div>
    );

}

export default Profile;
