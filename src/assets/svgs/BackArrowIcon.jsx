import PropTypes from 'prop-types'

const BackArrowIcon = ({ width = 24, height = 24, size = 24 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || `${size}px`}
      height={height || `${size}px`}
      viewBox='0 96 960 960'
      fill='white'
    >
      <path d='M480 896 160 576l320-320 57 56-224 224h487v80H313l224 224-57 56Z'></path>
    </svg>
  )
}

BackArrowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
}

export default BackArrowIcon
