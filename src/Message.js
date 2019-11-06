import React, { Component } from 'react';
import './Message.scss'

class Message extends Component {

  render() {
    const { username, profile_picture } = this.props.user
    const { id, sent, text } = this.props.content
    return (
      <div className="message">
        <div className="message__user">
        <img src={profile_picture} width="75" alt="userPic"/>
        <strong>{username}</strong>
        </div>
        <div className="message__content">
        <p className="message__content__text">{text}</p>
        </div>
      </div>
    );
  }

}

export default Message;
