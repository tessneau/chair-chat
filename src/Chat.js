import React, { Component } from 'react';
import Messages from './Messages'
import ChatForm from './ChatForm'
import './Chat.scss'

class Chat extends Component {

  render() {
    return (
      <div className="chat">
      <Messages {...this.props.currentChat}/>
      <ChatForm {...this.props.currentUser} postMessage={this.props.postMessage}/>
      </div>
    );
  }

}

export default Chat;
