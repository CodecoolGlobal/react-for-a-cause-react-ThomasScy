import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [data, setData] = useState({})
  const [displayForm, setDisplayForm] = useState(true)
  const [displayThx, setDisplayThx] = useState(false)



  const handleInput = (input) => {
    const newData = { ...data };
    const userInput = input.target.value.trim();
    if (input.target.value.length > 0) {
      if (input.target.id === "first-name") {
        newData.firstName = userInput;
      } else if (input.target.id === "last-name") {
        newData.lastName = userInput;
      } else if (input.target.id === "email") {
        newData.email = userInput;
      } else if (input.target.id === "subject") {
        newData.subject = userInput;
      } else if (input.target.id === "message") {
        newData.message = userInput;
      }
      setData(newData)
    }
  }

  const sendContact = (e) => {
    e.preventDefault();
    if (e.target.id === "sendBtn") {
      console.log(data);
      setDisplayForm(false);
      setDisplayThx(true);
    }
  }


  return (
    <section className="contact">
      <hr></hr>
      <h1>Contact Us</h1>

      {displayForm && (
        <form className='contact-form'>
          <input id="first-name" type="text" placeholder="First name" onChange={handleInput} />
          <input id="last-name" type="text" placeholder="Last name" onChange={handleInput} />
          <input id="email" type="email" placeholder="Email" onChange={handleInput} />
          <input id="subject" type="text" placeholder="Subject" onChange={handleInput} />
          <input id="message" type="text" placeholder="Message" onChange={handleInput} />
          <button id="sendBtn" type="button" onClick={sendContact}>Send</button>
        </form>
      )}
      {displayThx && (
        <div id="thx-container">
          <p>
            We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
            Have a great day!
          </p>
        </div>
      )}

    </section>
  );
};