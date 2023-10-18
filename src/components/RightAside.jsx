import Languages from '../components/about/Languages'
import Framework from '../components/about/Framework'
import AboutInfo from '../components/about/AboutInfo'
import Contact from '../components/about/Contact'
import Copyright from '../components/about/Copyright'

const RightAside = () => {
  return (
    <aside
      style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 1)' }}
      className='hidden lg:flex  px-2 bg-dark2 lg:h-screen flex-col gap-3 pt-3 overflow-y-scroll'
    >
      <AboutInfo />
      <Languages />
      <Framework />
      <Contact />
      <Copyright />
    </aside>
  )
}

export default RightAside
