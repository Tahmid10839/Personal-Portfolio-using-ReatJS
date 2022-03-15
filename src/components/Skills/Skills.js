import React, { useEffect, useRef, useState } from 'react'
import './skills.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";

const skillsData = [
    {
        id: 1,
        name: 'C',
        value: 85,
    },
    {
        id: 2,
        name: 'C++',
        value: 80,
    },
    {
        id: 3,
        name: 'Python',
        value: 80,
    },
    {
        id: 4,
        name: 'HTML',
        value: 90,
    },
    {
        id: 5,
        name: 'CSS',
        value: 85,
    },
    {
        id: 6,
        name: 'Javascript',
        value: 75,
    },
    {
        id: 7,
        name: 'SQL',
        value: 85,
    },
    {
        id: 8,
        name: 'PHP',
        value: 70,
    },
    {
        id: 9,
        name: 'React',
        value: 85,
    },
    {
        id: 10,
        name: 'Redux',
        value: 85,
    },
    {
        id: 11,
        name: 'NodeJs',
        value: 75,
    },
    {
        id: 12,
        name: 'ExpressJS',
        value: 80,
    },
    {
        id: 13,
        name: 'MongoDB',
        value: 80,
    },
    {
        id: 14,
        name: 'ML',
        value: 80,
    },
    {
        id: 15,
        name: 'DL',
        value: 80,
    },
]

const Skills = ({ setUrl, theme }) => {

    const [display, setDisplay] = useState(false)

    // useEffect(() => {
    //     window.addEventListener('load', () => {
    //         setDisplay(true)
    //     })
    // }, [])

    useEffect(() => {
        window.addEventListener('load', () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1800) {
                    setDisplay(true)
                    setUrl('#skills')
                }
            })
        })
    }, [display])

    return (
        <div className={`${display ? 'display' : 'skills'}`}>
            <div className="section__info">
                <span className='section__subtitle'>
                    My Abilities
                </span>
                <h2 className="section__title">
                    Skills
                </h2>
            </div>
            <div className="skills__container">
                {skillsData.map((skill) => (
                    <div className='skills__box' key={skill.id}>
                        {display && (
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={skill.value}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({
                                                // textColor: '#f88',
                                                // trailColor: 'hsl(224, 83%, 16%)'
                                                trailColor: 'rgb(64, 67, 73)'
                                            })}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        )}
                        <h3 className='skills__title'>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills