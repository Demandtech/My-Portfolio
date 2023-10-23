import {
  Framework,
  AboutInfo,
  Contact,
  Copyright,
  LanguageList,
} from '../components/aside'

const RightAside = () => {
  return (
    <aside
      style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 1)' }}
      className='hidden lg:flex  px-2 bg-dark3 lg:h-screen flex-col gap-3 pt-3 overflow-y-scroll'
    >
      <AboutInfo />
      <LanguageList />
      <Framework />
      <Contact />
      <Copyright />
    </aside>
  )
}

export default RightAside
