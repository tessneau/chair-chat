import React, { Component } from 'react';
import Message from './Message'
import './Messages.scss'

class Messages extends Component {

  generateMessages = () => this.props.messages.map((message, i) => <Message key={i} {...message}/>)

  render() {
    const { name, messages } = this.props
    return (
      <div className="messages">
      <div className="messages__title">
      <h1>{name}</h1>
      </div>
      <div className="messages__list">
      { !messages || !messages.length ? "no messages yet, be the first champ!" : this.generateMessages()}
      </div>
      </div>
    );
  }

}

export default Messages;
