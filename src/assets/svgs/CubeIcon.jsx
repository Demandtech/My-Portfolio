import PropTypes from 'prop-types'

const CubeIcon = ({ width = 20, height = 20, size = 20 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || `${size}px`}
      height={height || `${size}px`}
      viewBox='0 -960 960 960'
      fill='#838383'
    >
      <path d='M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z'></path>
    </svg>
  )
}

CubeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
}

export default CubeIcon
