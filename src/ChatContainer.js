import React, { Component } from "react";
import SideBar from './SideBar'
import Chat from './Chat'
import './ChatContainer.scss'

class ChatContainer extends Component {

  state = {
    currentChat: this.props.data.chatrooms[0]
  }

  getChat = chat => {
    this.setState({currentChat: chat})
  }

  render() {
    const { current_user:currentUser } = this.props.data
    return (
      <div className="chat-container">
      <SideBar {...this.props.data} getChat={this.getChat} />
      <Chat currentChat={this.state.currentChat} currentUser={currentUser}/>
      </div>
    );
  }

}

export default ChatContainer;
