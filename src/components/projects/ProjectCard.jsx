import { CubeIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'

const ProjectCard = ({ name }) => {
  return (
    <div className='bg-dark2 border border-gray-dark rounded-lg p-2 shadow-[0 4px 4px rgba(0,0,0,.25)] flex flex-col gap-1.5'>
      <p className='flex items-center gap-1.5'>
        <CubeIcon />
        <span className='font-bold text-[#900d09]'>{name}</span>
      </p>
      <p className='text-gray-dark line-clamp-2 text-small'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
        consequatur esse temporibus, iusto saepe harum quam? Obcaecati
        repudiandae, aut maiores excepturi vel perspiciatis! Vitae laborum
        dignissimos molestiae consectetur fugiat sed.
      </p>
      <div className='flex gap-4'>
        <div className='flex items-center gap-1'>
          <div className='w-2.5 h-2.5 bg-[red] rounded-[4px]'></div>
          <div className='text-gray-dark'>HTML</div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='w-2.5 h-2.5 bg-[red] rounded-[4px]'></div>
          <div className='text-gray-dark'>Css</div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='w-2.5 h-2.5 bg-[red] rounded-[4px]'></div>
          <div className='text-gray-dark'>JavaScript</div>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
}

export default ProjectCard
