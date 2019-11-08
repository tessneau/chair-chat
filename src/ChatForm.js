import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import "./ChatForm.scss";

const ChatForm = ({ postMessage }) => {
  const maxChars = 15;

  const [message, setMessage] = useState("");
  const [characters, setCharacters] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
      characters >= maxChars ? setShow(true) : setShow(false)
    }, [characters])

  const handleChange = e => {
    const message = e.target.value;
    setMessage(message);
    setCharacters(message.length);
    // message.length >= maxChars ? setShow(true) : setShow(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div className="chatform">
      <p> {maxChars - characters} number of characters left </p>
      {show ? <p> maximum 15 characters reached </p> : null}
      <form className="ui action input" onSubmit={handleSubmit}>
        <input
          placeholder="Message..."
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          maxLength={maxChars}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ChatForm;

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

// <Form className="ui action input" onSubmit={handleSubmit}>
//   <Form.Field>
//     <input
//       placeholder="Message..."
//       type="text"
//       name="message"
//       value={message}
//       onChange={handleChange}
//       maxLength={maxChars}
//     />
//   </Form.Field>
//   <Form.Field>
//     <Button color="olive" type="submit">
//       Send
//     </Button>
//   </Form.Field>
// </Form>
