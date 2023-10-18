import { Link } from 'react-router-dom'
import { HomeIcon } from '../assets/svgs'
import { useLocation } from 'react-router-dom'
import Clock from './Clock'
import { ImCommand } from 'react-icons/im'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

const navLink = [
  { path: '/about', name: 'Background' },
  { path: '/projects', name: 'Projects' },

  { path: '/roadmap', name: 'Roadmap' },
  { path: '/experience', name: 'Experience' },
]

const Navbar = ({ setIsOpen }) => {
  const location = useLocation()
  const path = location.pathname
  const [hover, setHover] = useState({ left: 0, width: 0 })
  const hoverRef = useRef(null)
  const parentRef = useRef(null)

  const handleMouseEnter = (event) => {
    hoverRef.current.style.opacity = 1
    const buttonRect = event.target.getBoundingClientRect()
    const parentRect = parentRef.current.getBoundingClientRect()
    const left = buttonRect.left - parentRect.left
    const width = buttonRect.width
    setHover({ left, width })
  }

  const handleMouseLeave = () => {
    hoverRef.current.style.opacity = 0
  }

  return (
    <nav
      className='p-4 lg:p-5 rounded-lg bg-dark1'
      style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 1)' }}
    >
      <div className='flex justify-between text-gray-light   items-center border border-dark2 p-1 rounded-lg'>
        <div className='hidden lg:block'>
          <Clock />
        </div>
        <div className='lg:hidden'>
          <Link to={'/'}>
            <HomeIcon className={'fill-gray-light'} />
          </Link>
        </div>
        <div
          ref={parentRef}
          className={`${
            path !== '/' ? 'hidden' : 'items-center gap-5 hidden lg:flex'
          } relative`}
        >
          {navLink.map((href) => (
            <button
              key={href.path}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='z-10'
            >
              <Link
                className='block py-2 px-4 rounded-md transition-all duration-1000 ease-in-out z-10'
                to={href.path}
              >
                {href.name}
              </Link>
            </button>
          ))}
          <div
            style={{
              left: `${hover.left}px`,
              width: `${hover.width}px`,
              height: `100%`,
              display: 'block',
              position: 'absolute',
              transition: 'ease 500ms',
            }}
            ref={hoverRef}
            className={`bg-dark4  z-0 rounded-md`}
          ></div>
        </div>
        <div className='flex items-center'>
          {path !== '/' && (
            <Link to={'/'} className='mr-5 hidden lg:inline'>
              Home
            </Link>
          )}
          <div
            className='relative cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            <input
              readOnly
              className='focus:outline-none placeholder:text-[gray] text-sm bg-dark2 py-1 px-2 rounded-md'
              placeholder='Search...'
              type='text'
              // style={{ background: 'transparent' }}
            />
            <div className='flex items-center text-sm absolute right-1 top-1/2 -translate-y-1/2'>
              <ImCommand color='gray' />
              <span className='text-[gray]'>K</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setIsOpen: PropTypes.func,
}

export default Navbar
