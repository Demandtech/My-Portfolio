import { NavLink } from 'react-router-dom'
import {
  RoadMapIcon,
  EducationIcon,
  ExperienceIcon,
  AboutIcon,
  MenuIcon,
  ProjectIcon,
  NetworkIcon,
  PublicationIcon,
} from '../assets/svgs'
import PropTypes from 'prop-types'

const SmallAside = ({ setIsOpen }) => {
  return (
    <div className=' text-white h-screen bg-dark3 flex flex-col pt-4 lg:pt-8 lg:hidden gap-16'>
      <div className='w-full mb-4 text-center'>
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon className={'fill-gray-light '} />
        </button>
      </div>

      <div className='flex  flex-col gap-10 overflow-y-auto pb-5 smallbar'>
        <NavLink to={'/about'} className='px-2'>
          <AboutIcon className={'fill-gray-light'} />
        </NavLink>
        <NavLink to={'/education'} className='px-2'>
          <EducationIcon className={'fill-gray-light'} />
        </NavLink>

        <NavLink to={'/experience'} className='px-2'>
          <ExperienceIcon className={'fill-gray-light'} />
        </NavLink>

        <NavLink to={'/roadmap'} className='px-2'>
          <RoadMapIcon className={'fill-gray-light'} />
        </NavLink>

        <NavLink to={'/projects'} className='px-2'>
          <ProjectIcon className={'fill-gray-light'} />
        </NavLink>
        <NavLink to={'/network'} className='px-2'>
          <NetworkIcon className={'fill-gray-light'} />
        </NavLink>
        <NavLink to={'/publication'} className='px-2'>
          <PublicationIcon className={'fill-gray-light'} />
        </NavLink>
      </div>
    </div>
  )
}

SmallAside.propTypes = {
  setIsOpen: PropTypes.func,
}

export default SmallAside
