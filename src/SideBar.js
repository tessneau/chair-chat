import React, { Component } from 'react';
import Profile from './Profile'
import ChatroomList from './ChatroomList'
import './SideBar.scss'

const SideBar = ({ user, chatrooms, getChat }) => {

    return (
      <div className="sidebar">
      <Profile {...user}/>
      <ChatroomList chatrooms={chatrooms} getChat={getChat}/>
      </div>
    );

}

export default SideBar;
