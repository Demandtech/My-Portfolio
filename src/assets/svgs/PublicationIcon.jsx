import PropTypes from 'prop-types'

const PublicationIcon = ({
  size = 35,
  width = 35,
  height = 35,
  color,
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || `${size}px`}
      height={height || `${size}px`}
      fill={color}
      className={className}
      viewBox='0 -960 960 960'
    >
      <path d='M160-120q-33 0-56.5-23.5T80-200v-600q0-17 8-20.5t20 8.5l39 39 38-38q6-6 13-9t15-3q8 0 15 2.5t13 8.5l39 39 39-39q6-6 13-8.5t15-2.5q8 0 15 3t13 9l38 38 39-39q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l39 39 38-38q6-6 13-9t15-3q8 0 15 2.5t13 8.5l39 39 39-39q6-6 13-8.5t15-2.5q8 0 15 3t13 9l38 38 39-39q12-12 20-8.5t8 20.5v600q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z'></path>
    </svg>
  )
}

PublicationIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default PublicationIcon
