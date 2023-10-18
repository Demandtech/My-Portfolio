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
    <div className=' text-white h-screen bg-dark2 flex flex-col pt-5 w-[40] lg:pt-8 lg:hidden'>
      <div className='mb-20 w-full text-center'>
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon className={'fill-gray-light '} />
        </button>
      </div>

      <div className='flex flex-col gap-10'>
        <NavLink to={'/about'} className='w-full pl-2'>
          <AboutIcon className={'fill-gray-light'} />
        </NavLink>
        <NavLink to={'/education'} className=' w-full pl-2'>
          <EducationIcon className={'fill-gray-light'} />
        </NavLink>

        <NavLink to={'/experience'} className='w-full pl-2'>
          <ExperienceIcon className={'fill-gray-light'} />
        </NavLink>

        <NavLink to={'/roadmap'} className='w-full pl-2'>
          <RoadMapIcon className={'fill-gray-light'} />
        </NavLink>

        <NavLink to={'/projects'} className='w-full pl-2'>
          <ProjectIcon className={'fill-gray-light'} />
        </NavLink>
        <NavLink to={'/network'} className='w-full pl-2'>
          <NetworkIcon className={'fill-gray-light'} />
        </NavLink>
        <NavLink to={'/publication'} className='w-full pl-2'>
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
