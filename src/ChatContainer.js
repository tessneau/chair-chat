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

  postMessage = content => {
    const newCurrentChat = {...this.state.currentChat}
    const newMessage = {
      user: this.props.data.current_user,
      content: content
    }
    newCurrentChat.messages.push(newMessage)
    this.setState({currentChat: newCurrentChat})
  }

  render() {
    const { current_user:currentUser } = this.props.data
    return (
      <div className="chat-container">
      <SideBar {...this.props.data} getChat={this.getChat} />
      <Chat currentChat={this.state.currentChat} currentUser={currentUser} postMessage={this.postMessage}/>
      </div>
    );
  }

}

export default ChatContainer;
