import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './thesis.css'

const Thesis = ({ setUrl }) => {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        window.addEventListener('load', () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 3500) {
                    setDisplay(true)
                    setUrl('#thesis')
                }
            })
        })
    }, [display])

    return (
        <div className={`${display ? 'display' : 'thesis'}`}>
            <div className="section__info">
                <span className='section__subtitle'>
                    My Works
                </span>
                <h2 className="section__title">
                    Thesis & Publications
                </h2>
            </div>
            <div className="thesis__container">
                <div className='thesis__box'>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Title: </span> A Concern of Predicting Credit Recovery on Supervised Machine Learning Approaches</h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Field: </span> <span className='field'> Data Science, Machine Learning, Deep Learning</span></h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Published In: </span> 12th International Conference on Computing Communication and Networking Technologies (ICCCNT)</h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Date of Conference: </span> 6-8 July 2021</h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Conference Location: </span> Kharagpur, India</h3>
                    </div>
                    <div className='thesis__box2'>
                        <a href="https://ieeexplore.ieee.org/document/9579706" target="__blank" className='thesis__button'>Published Link<AiOutlineArrowRight className='arrow_icon' /></a>
                    </div>
                </div>
                <div className='thesis__box'>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Title: </span> A Comparative Study between Machine and Deep Learning Models for the Prediction of Bank Credit
                            Recovery</h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title'><span className='span__box'>Field: </span> <span className='field'> Data Science, Machine Learning, Deep Learning</span></h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title'>Final Year Defense Thesis of the Undergraduate Program</h3>
                    </div>
                    <div className='thesis__box2'>
                        <h3 className='about__title span__box'>Publication Ongoing</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thesis