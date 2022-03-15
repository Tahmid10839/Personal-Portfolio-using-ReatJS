import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import { RiMailSendLine } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import SnackBar from './SnackBar'

const Contact = ({ setOpen, setUrl }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [display, setDisplay] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_oija1el', 'template_ddw4vym', form.current, '7LRm7xn3d7tARNjJX')
        setName('')
        setEmail('')
        setMessage('')
        setOpen(true)
    };

    useEffect(() => {
        window.addEventListener('load', () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 4100) {
                    setDisplay(true)
                    setUrl('#contact')
                }
            })
        })
    }, [display])

    return (
        <div className={`${display ? 'display' : 'contact'}`}>
            <div className="section__info">
                <span className='section__subtitle'>
                    Get in Touch
                </span>
                <h2 className="section__title">
                    Contact Me
                </h2>
            </div>
            <div className="contact__container">
                <div className="contact__info">
                    <div className="contact__card">
                        <RiMailSendLine className='contact__card-icon' />
                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>
                            hossaint216@gmail.com
                        </span>
                        <a href="mailto:hossaint216@gmail.com" target="_blank" className='contact__button'>
                            Write Me <AiOutlineArrowRight className='contact__button-icon' />
                        </a>
                    </div>
                    <div className="contact__card">
                        <FaFacebookMessenger className='contact__card-icon' />
                        <h3 className='contact__card-title'>Messenger</h3>
                        <span className='contact__card-data'>
                            nazreimam.tahmid.7
                        </span>
                        <a href="http://www.m.me/nazreimam.tahmid.7" target="_blank" className='contact__button'>
                            Write Me <AiOutlineArrowRight className='contact__button-icon' />
                        </a>
                    </div>
                </div>
                <div className="contact__form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label htmlFor="" className='contact__form-tag'>
                                Name
                            </label>
                            <input type="text" name="name" className='contact__form-input' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="" className='contact__form-tag'>
                                Mail
                            </label>
                            <input type="email" name="email" className='contact__form-input' placeholder='Enter Your Mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className='contact__form-tag'>
                                Message
                            </label>
                            <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Enter Your Message' value={message} onChange={(e) => setMessage(e.target.value)} required>
                            </textarea>
                        </div>
                        <div className="contact__form-button">
                            <button className='button' type='submit'>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact