import React, { Component } from "react";
import SideBar from './SideBar'
import Chat from './Chat'
import './ChatContainer.scss'

class ChatContainer extends Component {

  render() {
    return (
      <div className="chat-container">
      <SideBar {...this.props.data}/>
      <Chat {...this.props.data}/>
      </div>
    );
  }

}

export default ChatContainer;
