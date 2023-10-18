import { programs } from '../../utils/data'
import LanguageCard from './LanguageCard'

const Languages = () => {
  return (
    <div className=' bg-dark2 p-2 rounded-lg'>
      <h5 className='text-white text-sm font-semibold  mb-2'>
        Programming languages
      </h5>
      <div className='flex gap-2 flex-wrap'>
        {programs.map((pro, index) => (
          <LanguageCard {...pro} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Languages
