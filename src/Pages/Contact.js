import React, { useRef, useState} from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import "./CSS/Contact.css"
// import HeadingText from "../Components/HeadingText/HeadingText"

import emailjs from '@emailjs/browser';

const About = () => {

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
  
    const [ done, setDone] = useState(false)
    const [ notSent, setNotSent] = useState(false)
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs
        .sendForm('service_37vibr2', 'template_9pbffde', form.current, {
          publicKey: 'qAnAsVahlFfnpPoMR',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone(true);
          },
         
          (error) => {
            console.log('FAILED...', error.text);
            setNotSent(true);
          },
        );
  
        setName('');
        setEmail('');
        // setNumber('');
        setMessage('');
    };

  return (
    <div>
      <section className='contact'>
        <div className='content'>
          <h1> Contact Us </h1>
          <p>We sell Photolabs Materials such as  Flash Laminations Films, Matt Laminations Films Leather Laminations Films, Printer Papers Canvas Materials etc.</p>
        </div>
        <div className='container'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'><FaRegAddressBook /></div>
              <div className='text'>
                <h3>Head office & Showroom</h3>
                <p> No6 Ayinke Street Ladlak Bariga Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><MdOutlineMarkEmailUnread /></div>
              <div className='text'>
                <h3>Emails</h3>
                <p>Adrianperfectframing@yahoo.com</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><FaPhone /> </div>
              <div className='text'>
                <h3>Phone No</h3>
                <p>+2347039868895 </p>
              </div>
            </div>
          </div>
          <div className='contactForm'>

            <form id="myForm" ref={form} onSubmit={sendEmail} >
              <h2>Get in touch</h2>
              <div className='inputBox'>
                <input type="text" name="to_name" value={name} required placeholder=''
                  onChange={(e) => setName(e.target.value)}/>
                <span>Full Name</span>
              </div>
              <div className='inputBox'>
                <input type='email' name="user_email" value={email} required placeholder=''
                 onChange={(e) => setEmail(e.target.value)} />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea name='message' id='message' value={message}
                   onChange={(e) => setMessage(e.target.value)} required ></textarea>
                <span>Type your Message. . .</span>
              </div>
              <div className='inputBox'>
                <input type="submit" name="" value="send" />
              </div>
              <h3>{done && "Message Sent"}</h3>
              <h3>{notSent && "Message Not Sent! check your network connection"} </h3>

              
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About