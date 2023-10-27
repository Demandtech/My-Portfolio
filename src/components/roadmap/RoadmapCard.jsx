import PropTypes from 'prop-types'

const RoadmapCard = ({ text, date, title }) => {
  return (
    <div className='text-white bg-dark4 p-2 border-l-8 border-red1'>
      <h3 className=' md:text-lg lg:text-2xl font-black'>{title}</h3>
      <p className='text-gray-light text-sm md:text-base font-bold uppercase py-1'>
        {date}
      </p>
      <p className='text-gray-light text-sm md:text-base'>{text}</p>
    </div>
  )
}

RoadmapCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
}

export default RoadmapCard
