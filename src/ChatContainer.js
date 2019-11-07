import React, { useState } from "react";
import SideBar from './SideBar'
import Chat from './Chat'
import './ChatContainer.scss'
import data from './data.js'

const ChatContainer = () => {

  const [user, setUser] = useState(data.current_user)
  const [chatrooms, setChatrooms] = useState(data.chatrooms)
  const [currentChat, setCurrentChat] = useState(data.chatrooms[3])

  const getChat = chat => {
    setCurrentChat(chat)
  }

  const postMessage = content => {
    const newMessage = {
      user: user,
      content: {
        text: content
      }
    }
    const newCurrentChat = {
      ...currentChat,
      messages: [...currentChat.messages, newMessage]
    }
    setCurrentChat(newCurrentChat)

    const newChatrooms = chatrooms.map(chatroom => {
        if (chatroom.name === newCurrentChat.name) {
          return newCurrentChat
        }
        return chatroom
      })
      console.log(newChatrooms)
      setChatrooms(newChatrooms)
  }

    console.log(data)
    return (
      <div className="chat-container">
      <SideBar {...data} getChat={getChat} />
      <Chat currentChat={currentChat} currentUser={user} postMessage={postMessage}/>
      </div>
    );

}

export default ChatContainer;
