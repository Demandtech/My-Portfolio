import { Link } from 'react-router-dom'
import {
  EducationIcon,
  ExperienceIcon,
  AboutIcon,
  ProjectIcon,
  RoadMapIcon,
  PublicationIcon,
  NetworkIcon,
} from '../assets/svgs'
import { twMerge } from 'tailwind-merge'
import { useSelector } from 'react-redux'

const MenuLink = () => {
  const { activePage } = useSelector((store) => store.features)
  const menuLinkStyle = (page) => {
    return page === activePage
      ? 'text-[#ffffff] py-2 px-3 flex items-center bg-dark4 gap-2 rounded-lg'
      : 'text-gray-light py-2 px-3 flex items-center bg-dark4 gap-2 rounded-lg'
  }
  const menuIconStyle = (page) => {
    return page === activePage ? 'fill-[#ffffff] ' : 'fill-gray-light '
  }
  return (
    <div className='px-4 my-5'>
      <p className='text-white mb-2'>Go to</p>
      <div className='flex gap-4 h-full items-center flex-wrap text-gray-light'>
        <Link to={'/about'} className={twMerge(menuLinkStyle('about'))}>
          <AboutIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('about'))}
          />
          <p>About me</p>
        </Link>
        <Link to={'/education'} className={twMerge(menuLinkStyle('education'))}>
          <EducationIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('education'))}
          />
          <p>Education</p>
        </Link>
        <Link
          to={'/experience'}
          className={twMerge(menuLinkStyle('experience'))}
        >
          <ExperienceIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('experience'))}
          />
          <p>Experience</p>
        </Link>
        <Link to={'/roadmap'} className={twMerge(menuLinkStyle('roadmap'))}>
          <RoadMapIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('roadmap'))}
          />
          <p>Roadmap</p>
        </Link>
        <Link to={'/projects'} className={twMerge(menuLinkStyle('project'))}>
          <ProjectIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('project'))}
          />
          <p>Project</p>
        </Link>
        <Link
          to={'/publication'}
          className={twMerge(menuLinkStyle('publication'))}
        >
          <PublicationIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('publication'))}
          />
          <p>Publication</p>
        </Link>
        <Link to={'/network'} className={twMerge(menuLinkStyle('network'))}>
          <NetworkIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(menuIconStyle('network'))}
          />
          <p>Network</p>
        </Link>
      </div>
    </div>
  )
}

export default MenuLink
