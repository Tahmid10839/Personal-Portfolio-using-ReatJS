import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavItem = ({ url, icon, navUrl }) => {

    const [active, setActive] = useState('')
    const location = useLocation()

    useEffect(() => {
        if (location.hash === '') {
            setActive('#home')
        } else {
            setActive(location.hash)
        }
        if (navUrl) {
            setActive('')
        }
    }, [location, navUrl])

    return (
        <a href={url} className={`nav__link ${active === url || navUrl === url ? 'active-link' : ''}`}>
            {icon}
        </a>
    )
}

export default NavItem