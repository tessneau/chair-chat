import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import './ChatForm.scss'

class ChatForm extends Component {

  state = {
    id: 5,
    sent: new Date().toString(),
    text: ""
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postMessage(this.state)
    this.setState({text: ""})
  }

  render() {
    return (
      <div className="chatform" onSubmit={this.handleSubmit}>
      <form>
        <label>Message</label>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}

export default ChatForm;
