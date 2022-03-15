import React, { useState, useEffect } from 'react'
import './about.css'
import AboutImg from '../../assets/images/tahmid.jpg'
import { MdDriveFileRenameOutline, MdDateRange, MdOutlineLocationOn } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'

const About = ({ setUrl }) => {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        window.addEventListener('load', () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 600) {
                    setDisplay(true)
                    setUrl('#about')
                }
                // else {
                //     setDisplay(false)
                // }
            })
        })

    }, [display])

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY <= 300) {
    //             setDisplay(true)
    //             console.log('About', window.scrollY, display);
    //         }
    //         else {
    //             setDisplay(true)
    //         }
    //     })
    // }, [display])

    return (
        <div className={`${display ? 'display' : 'about'}`}>
            {/* <div className="about"> */}
            <div className='section__info'>
                <span className='section__subtitle'>
                    My Intro
                </span>
                <h2 className="section__title">
                    About Me
                </h2>
            </div>
            <div className="about__container">
                <div className="about__handle">
                    <img src={AboutImg} alt="About Image" className='about__img' />
                </div>
                <div className="about__data">
                    <div className="about__info">
                        <div className="about__box">
                            <div className='about__box2'>
                                <MdDriveFileRenameOutline className='about__icon' />
                                <h3 className='about__title'>Nazre Imam Tahmid</h3>
                            </div>
                            <div className='about__box2'>
                                <MdDateRange className='about__icon' />
                                <h3 className='about__title'>09-07-1998</h3>
                            </div>
                        </div>
                        <div className="about__box">
                            <div className='about__box2'>
                                <HiOutlineMail className='about__icon' />
                                <h3 className='about__title'>hossaint216@gmail.com</h3>
                            </div>
                            <div className='about__box2'>
                                <AiOutlinePhone className='about__icon' />
                                <h3 className='about__title'>+8801515637958</h3>
                            </div>
                        </div>
                        <div className="about__box">
                            <div className='about__box2'>
                                <MdOutlineLocationOn className='about__icon' />
                                <h3 className='about__title'>364/4-B, Bondhumahal North pirerbag, Ward no: 11, Mirpur -1,
                                    Dhaka-1216</h3>
                            </div>
                        </div>
                    </div>
                    <h4 className='about__info2'>I'd like to call myself passionate learner. I like to take new challenge and enjoy learning something new every day.</h4>
                    <a href="#contact" className='button'>Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default About