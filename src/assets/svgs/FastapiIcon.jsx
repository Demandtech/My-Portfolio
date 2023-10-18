import PropTypes from 'prop-types'
const FastapiIcon = ({ width = 20, height = 20, size = 20 }) => (
  <svg
    fill='none'
    width={width || `${size}px`}
    height={height || `${size}px`}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 154 154'
  >
    <circle cx='77' cy='77' fill='#05998b' r='77' />
    <path
      d='M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z'
      fill='#fff'
    />
  </svg>
)

FastapiIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
}
export default FastapiIcon
