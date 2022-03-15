import React, { useState, useEffect } from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Thesis from './components/Thesis/Thesis'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import SnackBar from './components/Contact/SnackBar'
import { AiOutlineArrowUp } from 'react-icons/ai'

const App = () => {

    const [url, setUrl] = useState('')
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState(false)
    const [arrow, setArrow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [open])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 300) {
                setArrow(true)
            } else {
                setArrow(false)
            }
        })
    }, [arrow])

    return (
        <Router>
            <div className={`${theme ? 'light' : 'dark'}`}>
                <Header theme={theme} setTheme={setTheme} />
                <Navbar navUrl={url} />
                <main className='main'>
                    <section className='section' id='home'>
                        <Home setUrl={setUrl} />
                    </section>
                    <section className='section' id='about'>
                        <About setUrl={setUrl} />
                    </section>
                    <section className='section' id='education'>
                        <Education setUrl={setUrl} />
                    </section>
                    <section className='section' id='skills'>
                        <Skills setUrl={setUrl} theme={theme} />
                    </section>
                    <section className='section' id='projects'>
                        <Projects setUrl={setUrl} />
                    </section>
                    <section className='section' id='thesis'>
                        <Thesis setUrl={setUrl} />
                    </section>
                    <section className='section' id='contact'>
                        <Contact setUrl={setUrl} setOpen={setOpen} />
                    </section>
                </main>
                <section className='section'>
                    <Footer />
                </section>
                <SnackBar open={open} setOpen={setOpen} />

                <a href="#home">
                    <AiOutlineArrowUp className={`${arrow ? 'display-arrow' : 'up-arrow'}`} />
                </a>
            </div>
        </Router>
    )
}

export default App