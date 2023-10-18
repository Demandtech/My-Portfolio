import PropTypes from 'prop-types'

const ProjectIcon = ({
  size = 35,
  width = 35,
  height = 35,
  color,
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 96 960 960'
      width={width || `${size}px`}
      height={height || `${size}px`}
      fill={color}
      className={className}
    >
      <path d='M352 936H200q-33 0-56.5-23.5T120 856V704q48 0 84-30.5t36-77.5q0-47-36-77.5T120 488V336q0-33 23.5-56.5T200 256h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800 336v160q42 0 71 29t29 71q0 42-29 71t-71 29v160q0 33-23.5 56.5T720 936H568q0-50-31.5-85T460 816q-45 0-76.5 35T352 936Zm-152-80h85q24-66 77-93t98-27q45 0 98 27t77 93h85V616h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80V336H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80H200v88q54 20 87 67t33 105q0 57-33 104t-87 68v88Zm310-310Z'></path>
    </svg>
  )
}

ProjectIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default ProjectIcon
