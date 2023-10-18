import { libraries } from '../../utils/data'
import LanguageCard from './LanguageCard'

const Framework = () => {
  return (
    <div className='bg-dark2 p-2 rounded-lg'>
      <h5 className='text-white mb-2 text-sm font-semibold'>
        Frameworks, libraries & devtools
      </h5>
      <div className='flex gap-2 flex-wrap'>
        {libraries.map((pro, index) => (
          <LanguageCard {...pro} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Framework
