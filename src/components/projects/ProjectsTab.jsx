import { useLocation, useNavigate } from 'react-router-dom'
import { projectLang } from '../../utils/data'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ProjectsTab = ({ setLanguage }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const languageParam = searchParams.get('language')

  const [position, setPosition] = useState(0)
  const [size, setSize] = useState(0)
  const [hoverPosition, setHoverPosition] = useState(0)
  const [hoverSize, setHoverSize] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  const handleActive = () => {
    const activeButtonElement = document.querySelector('.active-button')
    const buttonRect = activeButtonElement.getBoundingClientRect()
    const parentRect = activeButtonElement.parentElement.getBoundingClientRect()

    const leftRelativeToParent = buttonRect.left - parentRect.left

    setPosition(leftRelativeToParent)
    setSize(buttonRect.width)
  }

  const handleClick = (language) => {
    const newPath =
      language === 'All'
        ? '/projects'
        : `${location.pathname}?language=${language}`

    navigate(newPath)
    setLanguage(language)
  }

  const handleMouseEnter = (event) => {
    const activeButtonElement = document.querySelector('.hover-display')
    activeButtonElement.style.display = 'block'
    activeButtonElement.style.opacity = 0.5
    const buttonRect = event.target.getBoundingClientRect()
    const parentRect = event.target.parentElement.getBoundingClientRect()
    const left = buttonRect.left - parentRect.left
    setHoverPosition(left)
    setHoverSize(buttonRect.width)
  }

  const handleMouseLeave = () => {
    const activeButtonElement = document.querySelector('.hover-display')
    activeButtonElement.style.display = 'none'
    activeButtonElement.style.opacity = 0
  }

  const handleSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleActive()
  }, [languageParam, width])

  useEffect(() => {
    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)
  }, [])

  return (
    <div className='overflow-x-scroll sticky top-0 py-2 bg-dark3 project-tab z-50'>
      <div className='flex gap-2 justify-between md:justify-normal px-2 w-[calc(100vw-55px)] lg:w-full relative'>
        {projectLang.map((language, index) => (
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(language)}
            className={`${
              (languageParam === language && language !== 'All') ||
              (languageParam === null && language === 'All')
                ? 'active-button'
                : ''
            } px-4 py-2  rounded-md transition-all duration-300 text-gray-light z-10 text-sm lg:text-base`}
            key={index}
          >
            {language}
          </button>
        ))}
        <div
          style={{
            left: `${position}px`,
            width: `${size}px`,
            height: `100%`,
            display: 'block',
            position: 'absolute',
            transition: 'ease 100ms',
          }}
          className={` bg-dark4  z-0 rounded-md`}
        ></div>
        <div
          style={{
            left: `${hoverPosition}px`,
            width: `${hoverSize}px`,
            height: `100%`,
            display: 'block',
            position: 'absolute',
            transition: 'ease 500ms',
          }}
          className={`bg-dark4  z-0 rounded-md hover-display`}
        ></div>
      </div>
    </div>
  )
}

ProjectsTab.propTypes = {
  setLanguage: PropTypes.func,
}

export default ProjectsTab
