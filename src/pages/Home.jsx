import NormalLayout from '../layouts/NormalLayout'

const Home = () => {
  return (
    <NormalLayout
      activePage='home'
      page='Welcome'
      content={'Welcome to my portofio'}
    >
      <div className='text-white'>Home</div>
    </NormalLayout>
  )
}

export default Home
