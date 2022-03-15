import React from 'react'
import './header.css'
import { BsMoon } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'

const Header = ({ theme, setTheme }) => {
    return (
        <div className="header">
            <a href="#home" className='header__logo'>Nazre Imam Tahmid</a>
            {theme ? (
                <FiSun className='header__icon' onClick={() => setTheme(!theme)} />
            ) : (
                <BsMoon className='header__icon' onClick={() => setTheme(!theme)} />
            )}
        </div>
    )
}

export default Header