import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const [subform,setSubForm]= useState(false);

    const form = useRef()
    const sendEmail=(e)=>{
        e.preventDefault();
        setSubForm(true)
    emailjs.sendForm('service_7r1ewnm', 'template_fdvmz6d', form.current, 'Z-E3QHhQ2EzPNxkER')
      .then((result) => {
          console.log(result.text);
          alert('Thank you For Reaching out')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
  return (
    <div>
        <FormStyle ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="name">Please Enter Your Name*
                    <input type="text" id='name' name='name'  placeholder="Enter your name" required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">Please Enter Your Email*
                    <input type="email" id='email' name='email'  placeholder="Enter Your Email" required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="Subject">Please Enter Your Subject*
                    <input type="text" id='subject' name='subject'  placeholder="Enter Your Subject" required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="message"> Please Enter Your Message
                    <textarea type="text" cols='30' rows='6' id='message' name='message'  placeholder="Enter Your Message" />
                </label>
            </div>
            <button type='submit' disabled={subform}>Send</button>
        </FormStyle>
    </div>
  )
}

const FormStyle=styled.form`
    width: 100%;
    text-align: initial;
    .form-group{
        width: 100%;
        margin-bottom: 1.2rem;
        
    }
    .label{
        font-size: 1.8rem;
    }
    input,
    textarea{
        width: 100%;
        font-size: 1.2rem;
        padding: 0.75rem;
        color: gray;
        background-color: #d9d9d9;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 0.25rem;
    }
    textarea {
        min-height: 150px;
        resize: vertical;
    }
    button[type="submit"]{
        background-color: gray;
        color: black;
        font-size: 1.2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 0.5rem 2rem;
        border-radius: 8px;
        cursor: pointer;
    }

`

export default ContactForm