import NormalLayout from '../layouts/NormalLayout'

const About = () => {
  return (
    <>
      <NormalLayout
        page='About'
        content='This is where you will know more about me'
        activePage='about'
      >
        <div className='text-white'>About</div>
      </NormalLayout>
    </>
  )
}

export default About
