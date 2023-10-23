import { Link } from 'react-router-dom'
import { CubeIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'

const bg_colors = {
  tailwind: 'bg-[#38bdf8]',
  'redux and context': 'bg-[#ba8fff]',
  'styled-components': 'bg-[#915b37]',
  'redux toolkit': 'bg-[#b48af5]',
  scss: 'bg-[#cc6699]',
  html: 'bg-[#e34c26]',
  css: 'bg-[#5c3d7c]',
  javascript: 'bg-[#F0DB4F]',
  django: 'bg-[#092E20]',
  'django restframework': 'bg-[#a30f00]',
  jwt: 'bg-[#d63aff]',
  python: 'bg-[#3572A5]',
  typescript: '#3178c6',
  php: 'bg-[#7a86b8]',
  react: '#61dafb',
}
const ProjectCard = ({ name, tools, description, id }) => {
  const getToolBackgroundColor = (lowerToolName) => {
    return bg_colors[lowerToolName.toLowerCase()]
  }
  return (
    <div className='bg-dark2 border border-gray-dark rounded-lg p-2 shadow-[0 4px 4px rgba(0,0,0,.25)] flex flex-col gap-1.5'>
      <p className='flex items-center gap-1.5'>
        <CubeIcon />
        <Link to={`/projects/${id}`} className='font-bold text-red1 text-sm'>
          {name}
        </Link>
      </p>
      <p className='text-gray-dark line-clamp-2 text-small'>{description}</p>
      <div className='flex gap-4'>
        <ul className='flex items-center gap-2'>
          {tools
            .map((tool) => {
              let tool_name = tool[0]
              return (
                <li className='flex items-center gap-1 list-none' key={tool.id}>
                  <div
                    className={`${getToolBackgroundColor(
                      tool_name
                    )} w-2 h-2 rounded-[4px] opacity-75`}
                  ></div>
                  <div className='text-gray-dark text-xs leading-3'>
                    <span>{tool_name.toUpperCase()}</span>
                  </div>
                </li>
              )
            })
            .slice(0, 3)}
        </ul>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  tools: PropTypes.array,
  description: PropTypes.string,
  id: PropTypes.number,
}

export default ProjectCard
