import React from 'react'
import './footer.css'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className='footer__title'>Nazre Imam Tahmid</h1>
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className='footer__link'>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className='footer__link'>
                            Projects
                        </a>
                    </li>
                </ul>
                <ul className='footer__social'>
                    <a href="https://www.facebook.com/nazreimam.tahmid.7/" className='footer__social-link' target="_blank">
                        <BsFacebook />
                    </a>
                    <a href="https://github.com/Tahmid10839" className='footer__social-link' target="_blank">
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/nazre-imam-tahmid-b46304160/" className='footer__social-link' target="_blank">
                        <BsLinkedin />
                    </a>
                </ul>
                <span className='footer__copy'>
                    &#169; {new Date().getFullYear()}, Developed by Nazre Imam Tahmid
                </span>
            </div>
        </footer>
    )
}

export default Footer