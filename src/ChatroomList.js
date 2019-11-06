import React, { Component } from 'react';
import './ChatroomList.scss'
import Chatroom from './Chatroom'

class ChatroomList extends Component {

  generateChatrooms = () => this.props.chatrooms.map(chatroom => <Chatroom key={chatroom.name} {...chatroom} getChat={this.props.getChat}/>)

  render() {
    return (
      <div className="chatroom-list">
        <div className="chatroom-list__header">
          <h3>Chats</h3>
          <button className="chatroom-list__header__addBtn">✚</button>
        </div>
        <div className="chatroom-list__list">
          {this.generateChatrooms()}
        </div>
      </div>
    );
  }

}

export default ChatroomList;
