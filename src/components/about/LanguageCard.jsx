import PropTypes from 'prop-types'

const LanguageCard = ({ name, icon }) => {
  return (
    <div className='text-white flex items-center gap-0.5 bg-dark3 py-1 px-2 rounded-md'>
      {icon}
      <p className='text-gray-light text-sm leading-tight'>{name}</p>
    </div>
  )
}

LanguageCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
}

export default LanguageCard
