import PropTypes from 'prop-types'

const ExperienceCard = ({ position, company, year, about }) => {
  return (
    <div className='text-white bg-dark4 p-2 border-l-8 border-red1'>
      <h3 className=' md:text-lg lg:text-2xl font-black'>{position}</h3>
      <div className='text-gray-light font-bold uppercase py-1 text-sm md:text-base'>
        <span>{company}</span> - <span>{year}</span>
      </div>
    <p className='text-gray-light '>{about}</p>
   
    </div>
  )
}

ExperienceCard.propTypes = {
  position: PropTypes.string,
  year: PropTypes.number,
  about: PropTypes.string,
  company: PropTypes.string,
}

export default ExperienceCard
