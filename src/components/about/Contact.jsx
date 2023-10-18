import { AiOutlineLinkedin } from 'react-icons/ai'
import { PiTwitterLogoLight } from 'react-icons/pi'
import { BsEnvelope } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='bg-dark2 p-3 rounded-lg'>
      <h5 className='text-white mb-4 text-sm font-semibold '>Contact</h5>
      <div>
        <div className='mb-2 flex text-white items-center gap-1'>
          <AiOutlineLinkedin color='white' size={20} />
          <a
            className='text-[12px] text-gray-light'
            href='https://twitter.com/ara_tuntun'
          >
            @ara_tuntun
          </a>
        </div>
        <div className=' mb-2 flex text-white items-center gap-1'>
          <PiTwitterLogoLight color='white' size={20} />
          <a
            className='text-[12px]  text-gray-light'
            href='https://www.linkedin.com/in/demandwork/'
          >
            @demandwork
          </a>
        </div>
        <div className='mb-2 flex text-white items-center gap-1'>
          <BsEnvelope color='white' size={20} />
          <p className='text-[12px]  text-gray-light'>
            rasheedadekunle91@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
