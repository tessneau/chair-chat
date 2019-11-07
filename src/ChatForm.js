import React, { Component, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import "./ChatForm.scss";

const ChatForm = ({ postMessage }) => {

  const [message, setMessage] = useState("")

  const handleChange = e => setMessage(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    postMessage(message);
    setMessage("");
  }

  // useEffect(() => {
  //   console.log('i run at every render')
  //   })
  //
  // useEffect(() => {
  //   console.log('componentDidMount equivalent, i run only at the first render')
  //   }, [])
  //
  // useEffect(() => {
  //   console.log('i run when ')
  //   })

    return (
      <div className="chatform">
        <Form className="ui action input" onSubmit={handleSubmit}>
          <Form.Field>
            <input
              placeholder="Message..."
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button color="olive" type="submit">
              Send
            </Button>
          </Form.Field>
        </Form>
      </div>
    );
}

export default ChatForm;
