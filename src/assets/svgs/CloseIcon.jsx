import PropTypes from 'prop-types'
const CloseIcon = ({ width = 24, height = 24, size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width || `${size}px`}
    height={height || `${size}px`}
    viewBox='0 -960 960 960'
    fill='white'
  >
    <path d='M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z'></path>
  </svg>
)

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
}

export default CloseIcon
