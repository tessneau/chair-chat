import React, { Component } from 'react';
import Profile from './Profile'
import ChatroomList from './ChatroomList'
import './SideBar.scss'

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar">
      <Profile {...this.props.current_user}/>
      <ChatroomList chatrooms={this.props.chatrooms} getChat={this.props.getChat}/>
      </div>
    );
  }

}

export default SideBar;
