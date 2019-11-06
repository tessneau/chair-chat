import React, { Component } from 'react';

class Chatroom extends Component {

  render() {
    return (
      <div className="chatroom">
      <strong>{this.props.name}</strong>
      </div>
    );
  }

}

export default Chatroom;
