import React, { Component } from 'react';
import './Chat.scss'

class Chat extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="chat">
      I'm the chat !!!
      </div>
    );
  }

}

export default Chat;
