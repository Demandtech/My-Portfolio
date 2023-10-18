import { Link } from 'react-router-dom'
import NormalLayout from '../layouts/NormalLayout'
import Clock from '../components/Clock'

const Home = () => {
  return (
    <NormalLayout
      activePage='home'
      page='Welcome'
      content={'Welcome to my portofio'}
    >
      <div className='text-white text-center py-[40px] lg:pt-[120px] max-w-[650px] mx-auto px-5 bg-dark1'>
        <h1 className='text-5xl lg:text-8xl font-bold leading-[48px] mb-10'>
          {' < '} Doing <span className='text-[#900d09]'> Hard </span>
          Things {'/>'}
        </h1>
        <p className='text-lg lg:text-2xl text-gray-light mb-10'>
          I&apos;m a first-rate programmer with a thing for type-safety and good
          software architecture
        </p>
        <div className='mb-10'>
          <Link
            to='/projects'
            className='bg-white text-dark1 py-3  px-5 rounded-md font-semibold md:text-lg hover:bg-dark1 hover:text-white hover:border border-white'
          >
            See Projects
          </Link>
        </div>
        <div className='inline-flex justify-center border border-dark3 py-1 px-2 rounded-2xl lg:hidden'>
          <Clock />
        </div>
      </div>
    </NormalLayout>
  )
}

export default Home
