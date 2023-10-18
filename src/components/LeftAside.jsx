import { Link } from 'react-router-dom'
import {
  EducationIcon,
  ExperienceIcon,
  AboutIcon,
  ProjectIcon,
} from '../assets/svgs'
import { twMerge } from 'tailwind-merge'
import { useSelector } from 'react-redux'

const LeftAside = () => {
  const { activePage } = useSelector((store) => store.features)

  const leftAsideStyle = (page) => {
    return page === activePage
      ? 'w-full py-2 px-3 flex items-center bg-dark4 gap-2 rounded-lg text-[#ffffff]'
      : 'w-full py-2 px-3 flex items-center bg-dark4 gap-2 rounded-lg'
  }

  const subNavStyle = (page) => {
    return page === activePage
      ? 'text-gray-[#ffffff]  '
      : 'text-gray-dark hover:text-white'
  }

  const iconStyles = (page) => {
    return page === activePage ? 'fill-[#ffffff]' : 'fill-gray-light'
  }

  return (
    <div className='px-4 py-2 overflow-y-auto'>
      <div className='flex flex-col gap-5 h-full'>
        <Link to={'/about'} className={twMerge(leftAsideStyle('about'))}>
          <AboutIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(iconStyles('about'))}
          />
          <p>Background</p>
        </Link>
        <ul className='pl-5 flex flex-col gap-4'>
          <li
            className={`${twMerge(
              subNavStyle('about')
            )} transition-colors duration-300 ease-in-out`}
          >
            <Link to={'/about'}>About Me</Link>
          </li>
          <li
            className={`${twMerge(
              subNavStyle('education')
            )} transition-colors duration-300 ease-in-out`}
          >
            <Link to={'/education'}>Education</Link>
          </li>
          <li
            className={`${twMerge(
              subNavStyle('experience')
            )} transition-colors duration-300 ease-in-out`}
          >
            <Link to={'/experience'}>Experience</Link>
          </li>
          <li
            className={`${twMerge(
              subNavStyle('roadmap')
            )} transition-colors duration-300 ease-in-out`}
          >
            <Link to={'/roadmap'}>Roadmap</Link>
          </li>
        </ul>
        <Link
          to={'/projects'}
          className={`${twMerge(leftAsideStyle('projects'))}`}
        >
          <ProjectIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(iconStyles('projects'))}
          />
          <p>Project</p>
        </Link>
        <Link
          to={'/publication'}
          className={twMerge(leftAsideStyle('publication'))}
        >
          <EducationIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(iconStyles('publication'))}
          />
          <p>Publication</p>
        </Link>
        <Link to={'/network'} className={twMerge(leftAsideStyle('network'))}>
          <ExperienceIcon
            width={'20px'}
            height={'20px'}
            className={twMerge(iconStyles('network'))}
          />
          <p>Network</p>
        </Link>
      </div>
    </div>
  )
}

export default LeftAside
