import PropTypes from 'prop-types'

const AboutIcon = ({
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
      viewBox='0 96 960 960'
      fill={color}
      className={className}
    >
      <path d='M120 482v-85l181-181h85L120 482Zm0-196v-70h70l-70 70Zm527 67q-10-11-21.5-21.5T602 313l97-97h85L647 353ZM220 695l77-77q7 11 14.5 20t16.5 17q-28 7-56.5 17.5T220 695Zm480-197v-2q0-19-3-37t-9-35l152-152v86L700 498ZM436 280l65-64h85l-64 64q-11-2-21-3t-21-1q-11 0-22 1t-22 3ZM120 681v-85l144-144q-2 11-3 22t-1 22q0 11 1 21t3 20L120 681Zm709 83q-8-12-18.5-23T788 721l52-52v85l-11 10Zm-116-82q-7-3-14-5.5t-14-4.5q-9-3-17.5-6t-17.5-5l190-191v86L713 682Zm-233-26q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560 496q0-33-23.5-56.5T480 416q-33 0-56.5 23.5T400 496q0 33 23.5 56.5T480 576ZM160 936v-71q0-34 17-63t47-44q51-26 115.5-44T480 696q76 0 140.5 18T736 758q30 15 47 44t17 63v71H160Zm81-80h478q-2-9-7-15.5T699 830q-36-18-91.5-36T480 776q-72 0-127.5 18T261 830q-8 4-13 11t-7 15Zm239 0Zm0-360Z'></path>
    </svg>
  )
}

AboutIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default AboutIcon
