import PropTypes from 'prop-types'

const ExperienceIcon = ({
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
      <path d='m437-450 43-33 42 33q11 9 24 .5t8-22.5l-17-54 48-38q11-9 6.5-22.5T573-600h-57l-17-53q-5-14-19-14t-19 14l-17 53h-57q-14 0-19 14t6 22l48 38-17 54q-5 14 7.5 22.5t24.5-.5ZM293-58q-20 7-36.5-5T240-95v-254q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v254q0 20-16.5 32T667-58l-187-62-187 62Zm187-262q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z'></path>
    </svg>
  )
}

ExperienceIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default ExperienceIcon
