import React from 'react'
import { MdLocalPhone, MdMail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import styled from 'styled-components'
import ContectInfoitem from './ContectInfoitem'
import ContactForm from './ContactForm'


const ContactSection = () => {
  return (
    <ContactSectionStyle>
        <div className="container">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in Touch</span>
            <div className="contactSection__wrapper">
                <div className="left">
                    <h1 className="subTitle">Feel Free to Contact via...</h1>
                    <ContectInfoitem onClick={()=> window.open('tel:+919909553880')} Icon={<MdLocalPhone/>} text="Call me on +91 99095-53880"/>
                    <ContectInfoitem onClick={()=> window.open("mailto:alexdislva79@gmail.com")} Icon={<MdMail/>} text="Mail me on alexdislva79@gmail.com" />
                    <ContectInfoitem onClick={()=> window.open('https://www.linkedin.com/in/alex-dislva', '_blank')} Icon={<AiFillLinkedin/>} text="Let's Connect on Linkedin"/>
                </div>
                <div className="Right">
                <h1 className="subTitle">Contact Form</h1>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </ContactSectionStyle>
  )
}

const ContactSectionStyle =styled.div`
    padding:5rem 0;
    .contactSection__wrapper{
        display: flex;
        gap: 5rem;
        justify-content: center;
        position: relative;
    }
    .contactSection__wrapper::after{
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: gray;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left,.Right{
        width: 100%;
        max-width: 500px;
        text-align: center;
    }
    .Right{
        border-radius: 12px;
    }
    @media only screen and (max-width:768px){
        .contactSection__wrapper{
            flex-direction: column;
        }
        .contactSection__wrapper::after{
            display: none;
        }
        .left,.Right{
            max-width:80%;
            margin: auto;
            p{
                font-size: small;
            }
            
        }
        .Right{
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`

export default ContactSection