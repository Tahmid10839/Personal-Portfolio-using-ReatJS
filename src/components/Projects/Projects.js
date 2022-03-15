import React, { useEffect, useState } from 'react'
import './projects.css'
// import { BsGithub } from 'react-icons/bs'
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import covid from '../../assets/images/covid.PNG'
import crypto from '../../assets/images/crypto.PNG'
import imageFinder from '../../assets/images/imageFinder.PNG'
import codepen from '../../assets/images/codepen.PNG'
import postman from '../../assets/images/postman.PNG'
import memories from '../../assets/images/memories.PNG'
import olms from '../../assets/images/olms.PNG'
// import ReactPaginate from 'react-paginate'
import ProjectItems from './ProjectItems'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'React',
    },
    {
        id: 3,
        name: 'MERN',
    },
    {
        id: 4,
        name: 'PHP & MySQL',
    },
]

const menuItems = [
    {
        id: 1,
        image: covid,
        category: 'React',
        title: 'COVID-19 Tracker',
        git: 'https://github.com/Tahmid10839/Covid-19-Tracker-using-ReactJS-MaterialUI-API',
        site: 'https://nit-covid-19-tracker.netlify.app/'
    },
    {
        id: 2,
        image: crypto,
        category: 'React',
        title: 'CryptoVerse',
        git: 'https://github.com/Tahmid10839/Crypto-Currency-Web-app-using-ReactJS-Redux-AntDesign-API',
        site: 'https://nit-cryptoverse.netlify.app/'
    },
    {
        id: 3,
        image: imageFinder,
        category: 'React',
        title: 'Image Finder',
        git: 'https://github.com/Tahmid10839/Image-Finder-using-ReactJS-Material-UI-Pixabay-API',
        site: 'https://nit-image-finder.netlify.app/'
    },
    {
        id: 4,
        image: codepen,
        title: 'CodePen Clone',
        category: 'React',
        git: 'https://github.com/Tahmid10839/Codepen-Clone-using-ReactJS-Custom-Hook-useLocalStorage',
        site: 'https://nit-codepen-clone.netlify.app/'
    },
    {
        id: 5,
        image: postman,
        title: 'PostMan Clone',
        category: 'React',
        git: 'https://github.com/Tahmid10839/Postman-Clone-using-ReactJS-MaterialUI',
        site: 'https://nit-postman-clone.netlify.app/'
    },
    {
        id: 6,
        image: memories,
        title: 'Memories',
        category: 'MERN',
        git: 'https://github.com/Tahmid10839/Memories-using-MERN-REDUX-Material-UI',
        site: 'https://nit-memories.netlify.app'
    },
    {
        id: 7,
        image: olms,
        title: 'Online Library Management System',
        category: 'PHP & MySQL',
        git: 'https://github.com/Tahmid10839/Online-library-management-system-using-html-css-js-php-mysql',
        site: 'https://nit-olms.000webhostapp.com/'
    },
]

const Projects = ({ setUrl }) => {


    const [display, setDisplay] = useState(false)
    const [category, setCategory] = useState('All')
    const [menu, setMenu] = useState(menuItems.slice(0, 6))

    useEffect(() => {
        setMenu(menuItems)
    }, [])

    const filterData = (cat) => {
        setCategory(cat)
        if (cat === 'React') {
            const filteredData = menuItems.filter((item) => {
                return item.category === cat || item.category === 'MERN'
            })
            setMenu(filteredData)
        }
        else if (cat === 'All') {
            setMenu(menuItems)
        } else {
            const filteredData = menuItems.filter((item) => {
                return item.category === cat
            })
            setMenu(filteredData)
        }
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 2400) {
                    setDisplay(true)
                    setUrl('#projects')
                }
            })
        })
    }, [display])

    return (
        <div className={`${display ? 'display' : 'projects'}`}>
            <div className="section__info">
                <span className='section__subtitle'>
                    My Works
                </span>
                <h2 className="section__title">
                    Projects
                </h2>
            </div>
            <div className='projects__container'>
                <div className="projects__filter">
                    {categories.map((item) => (
                        <div className={`${category == item.name ? 'projects__filter-box active' : 'projects__filter-box'}`} key={item.id} onClick={() => filterData(item.name)}>
                            <span className='projects__filter-item'>{item.name}</span>
                        </div>
                    ))}
                </div>
                {/* <motion.div layout>
                    <AnimatePresence>

                        <ProjectItems menu={menu} category={category} />
                    </AnimatePresence>
                </motion.div> */}
                <ProjectItems menu={menu} category={category} />
            </div>
        </div>
    )
}

export default Projects