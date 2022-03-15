import React, { useEffect, useState } from 'react'
import cv from '../../assets/cv/Nazre Imam Tahmid.pdf'
import HomeImage from '../../assets/images/tahmid.jpg'
import './home.css'
import { BsFacebook, BsGithub, BsLinkedin, BsMouse } from 'react-icons/bs'

const Home = ({ setUrl }) => {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        window.addEventListener('load', () => {
            setDisplay(true)
        })

    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY <= 600) {
                setDisplay(true)
                setUrl('#home')
            }
            // else {
            //     setDisplay(false)
            // }
        })
    }, [display])

    return (
        <div className={`${display ? 'display' : 'home'}`}>
            {/* <div className="home"> */}
            <div className='home__container'>
                <div className="home__handle">
                    <img src={HomeImage} alt="Nazre Imam Tahmid" className='home__img' />
                </div>
                <div className="home__data">
                    <span className="home__greeting">
                        Hello, I'm
                    </span>
                    <h1 className='home__name'>
                        Nazre Imam Tahmid
                    </h1>
                    <h3 className='home__education'>
                        Web Developer
                    </h3>
                    <h4 className='home__info'>Welcome to my personal page that I've designed to showcase my skills, projects and expertise that I've accumulated over the year.</h4>
                    <div className="home__buttons">
                        <a download="" href={cv} className="button button-ghost">
                            Download CV
                        </a>
                        <a href="#about" className='button'>
                            About Me
                        </a>
                    </div>
                    <div className='home__social'>
                        <a href="https://www.facebook.com/nazreimam.tahmid.7/" className='home__social-link' target="_blank">
                            <BsFacebook />
                        </a>
                        <a href="https://github.com/Tahmid10839" className='home__social-link' target="_blank">
                            <BsGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nazre-imam-tahmid-b46304160/" className='home__social-link' target="_blank">
                            <BsLinkedin />
                        </a>
                    </div>

                    <a href="#about" className='home__scroll'>
                        <BsMouse className='home__scroll-icon' />
                        <span className='home__scroll-name'>
                            Scroll Down
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Home