import React, { Component } from 'react';
import Messages from './Messages'
import ChatForm from './ChatForm'
import './Chat.scss'

class Chat extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="chat">
      <Messages {...this.props.currentChat}/>
      <ChatForm />
      </div>
    );
  }

}

export default Chat;
