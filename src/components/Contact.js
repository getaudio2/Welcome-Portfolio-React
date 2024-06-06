import React from 'react'
import './Contact.css'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Define the regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    if (email.match(emailRegex)) { // email.match() to validate the email
      // Valid email address
      sendEmail(e);
      setEmailError("Email sent successfully!");
    } else if (email === "") {
      setEmailError("Email is empty!");
    } else {
      setEmailError("Invalid email address!");
    }
  };

  const form = useRef();

  // EmailJS function
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init('_hUxKPwuzPeD9yWBx');
    emailjs
      .sendForm('service_oxgzamb', 'template_ujab0gc', form.current).then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
    setEmail('');
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>paugermaisar@hotmail.es</h4>
            <a href='mailto:paugermaisar@hotmail.es' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h4>+34662239738</h4>
            <a href='https://api.whatsapp.com/send?phone=34662239738' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='name' 
            placeholder='Your Full Name' required 
          />
          <input 
            type='email' 
            name='email' 
            placeholder='Your Email' required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            name='message' 
            rows='7' 
            placeholder='Your Message' required
          ></textarea>

          {emailError && <div style={{ color: 'white' }}>{emailError}</div>}
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact