import React, { Component } from 'react';

class Chatroom extends Component {

  handleClick = () => {
    this.props.getChat(this.props)
  }

  render() {
    return (
      <div className="chatroom" onClick={this.handleClick}>
      <strong>{this.props.name}</strong>
      </div>
    );
  }

}

export default Chatroom;
