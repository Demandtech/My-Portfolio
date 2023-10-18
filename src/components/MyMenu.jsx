import AboutInfo from './about/AboutInfo'
import Languages from './about/Languages'
import Framework from './about/Framework'
import Contact from './about/Contact'
import PropTypes from 'prop-types'
import Modal from '../components/reusable/Modal'
import MenuLink from './MenuLink'

const MyMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} title={'Menu'}>
      <div>
        <AboutInfo />
        <MenuLink />
        <Framework />
        <Languages />
        <Contact />
      </div>
    </Modal>
  )
}

MyMenu.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default MyMenu
