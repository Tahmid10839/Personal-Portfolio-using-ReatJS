import React, { useEffect, useState } from 'react'
import './education.css'
import { MdDriveFileRenameOutline, MdDateRange, MdOutlineLocationOn } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'

const Education = ({ setUrl }) => {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        window.addEventListener('load', () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1200) {
                    setDisplay(true)
                    setUrl('#education')
                }
            })
        })
    }, [display])

    return (
        <div className={`${display ? 'display' : 'education'}`}>
            <div className="section__info">

                <span className='section__subtitle'>
                    Where I Studied
                </span>
                <h2 className="section__title">
                    Education
                </h2>
            </div>
            <div className="education__container">
                <div className='education__box'>
                    <div className='education__box2'>
                        <MdDriveFileRenameOutline className='education__icon' />
                        <h3 className='about__title'>Daffodil International University</h3>
                    </div>
                    <div className='education__box2'>
                        <MdDateRange className='education__icon' />
                        <h3 className='about__title'>2018-2022</h3>
                    </div>
                    <div className='education__box2'>
                        <MdOutlineLocationOn className='education__icon' />
                        <h3 className='about__title'>102/1, SukrabadMirpurRd, Dhaka-1207, Bangladesh</h3>
                    </div>
                    <div className='education__box2'>
                        <FaUserGraduate className='education__icon' />
                        <h3 className='about__title'>B.Sc. in Computer Science and Engineering</h3>
                    </div>
                    <div className='education__box2'>
                        <h3 className='about__title'>CGPA: &nbsp;3.96/4.00</h3>
                    </div>
                </div>
                <div className='education__box'>
                    <div className='education__box2'>
                        <MdDriveFileRenameOutline className='education__icon' />
                        <h3 className='about__title'>BCIC College</h3>
                    </div>
                    <div className='education__box2'>
                        <MdDateRange className='education__icon' />
                        <h3 className='about__title'>2014-2016</h3>
                    </div>
                    <div className='education__box2'>
                        <MdOutlineLocationOn className='education__icon' />
                        <h3 className='about__title'>Zoo Road, Mirpur-1, Dhaka-1216, Bangladesh</h3>
                    </div>
                    <div className='education__box2'>
                        <FaUserGraduate className='education__icon' />
                        <h3 className='about__title'>Higher Secondary Certificate in Science (Equivalent to 12th grade)</h3>
                    </div>
                    <div className='education__box2'>
                        <h3 className='about__title'>GPA:&nbsp; 5.00/5.00</h3>
                    </div>
                </div>
                <div className='education__box'>
                    <div className='education__box2'>
                        <MdDriveFileRenameOutline className='education__icon' />
                        <h3 className='about__title'>Model Academy High School</h3>
                    </div>
                    <div className='education__box2'>
                        <MdDateRange className='education__icon' />
                        <h3 className='about__title'>2008-2014</h3>
                    </div>
                    <div className='education__box2'>
                        <MdOutlineLocationOn className='education__icon' />
                        <h3 className='about__title'>Paikpara Official (D-Type) Colony Mirpur-1 Dhaka-1216, Bangladesh</h3>
                    </div>
                    <div className='education__box2'>
                        <FaUserGraduate className='education__icon' />
                        <h3 className='about__title'>Secondary School Certificate (Equivalent to 10th grade)</h3>
                    </div>
                    <div className='education__box2'>
                        <h3 className='about__title'>GPA: &nbsp;5.00/5.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education