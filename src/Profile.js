import React, { Component } from 'react';
import './Profile.scss'

class Profile extends Component {

  render() {
    return (
      <div className="profile">
      <h3>{this.props.username}</h3>
      <div className="profile__picture">
      <img src={this.props.profile_picture} width="100" alt="chair_me"/>
      </div>
      </div>
    );
  }

}

export default Profile;
