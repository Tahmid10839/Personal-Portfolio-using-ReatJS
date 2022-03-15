import React, { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectItems = ({ menu, category }) => {

    const [pageNumber, setPageNumber] = useState(0)

    const projectsPerPage = 6
    const pagesVisited = pageNumber * projectsPerPage
    const pageCount = Math.ceil(menu.length / projectsPerPage)

    useEffect(() => {
        if (category !== 'All') {
            setPageNumber(0);
        }
    }, [category])

    const displayProjects = menu.slice(pagesVisited, pagesVisited + projectsPerPage).map((item) => (
        <div className="projects__card" key={item.id}>
            <img src={item.image} alt={item.name} className='projects__img' />
            <h3 className='project__title'>{item.title}</h3>
            <div className='project__link'>
                <a href={item.git} className='github' target="_blank">
                    <BsGithub />
                </a>
                <a href={item.site} className='project__button' target='_blank'>
                    Site <AiOutlineArrowRight className='arrow_icon' />
                </a>
            </div>
        </div>
    ))

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <>
            {/* <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className='projects__project'
            >
                <AnimatePresence>
                {displayProjects}
                </AnimatePresence>
            </motion.div> */}
            <div className='projects__project'>
                {displayProjects}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"disabled"}
                activeClassName={'active'}
                forcePage={pageNumber}
            />
        </>
    )
}

export default ProjectItems