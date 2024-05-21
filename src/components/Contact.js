import React from 'react'
import './Contact.css'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  // EmailJS function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oxgzamb', 'template_ujab0gc', form.current, {
        publicKey: 'A7qD41T7UvKy_1-jM',
      })
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
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact