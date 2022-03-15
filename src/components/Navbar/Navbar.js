import React from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiMessageRoundedDetail, BiBriefcase } from 'react-icons/bi'
import { RiBriefcase4Line } from 'react-icons/ri'
import { MdCastForEducation } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti'
import { FiMessageSquare } from 'react-icons/fi'
import NavItem from './NavItem'

const navData = [
    {
        id: '1',
        icon: <AiOutlineHome />,
        url: '#home',
    },
    {
        id: '2',
        icon: <AiOutlineUser />,
        url: '#about',
    },
    {
        id: '3',
        icon: <MdCastForEducation />,
        url: '#education',
    },
    {
        id: '4',
        icon: <GiSkills />,
        url: '#skills',
    },
    {
        id: '5',
        icon: <RiBriefcase4Line />,
        url: '#projects'
    },
    {
        id: '6',
        icon: <BiBriefcase />,
        url: '#thesis'
    },
    {
        id: '7',
        icon: <FiMessageSquare />,
        url: '#contact'
    },
]

const Navbar = ({ navUrl }) => {
    return (
        <div className="nav__menu">
            <ul className="nav__list">
                {navData.map((item) => (
                    <li className="nav__item" key={item.id}>
                        <NavItem url={item.url} icon={item.icon} navUrl={navUrl} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar