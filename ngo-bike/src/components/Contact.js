import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [data, setData] = useState({})
  const handleInput = (input) => {
    if (input.target.value.length > 0) {
      console.log(data);

      const newData = {...data};
      newData.firstName = input.target.value;
      setData(newData)
      console.log(newData);
    }
  }


  return (
    <section className="contact">
      <hr></hr>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <input type="text" placeholder="First name" onChange={handleInput} />
        <input type="text" placeholder="Last name" onChange={handleInput} />
        <input type="email" placeholder="Email" onChange={handleInput} />
        <input type="text" placeholder="Subject" onChange={handleInput} />
        <input type="text" placeholder="Message" onChange={handleInput} />
        <button>Send</button>
      </form>

    </section>
  );
};