import {
  Framework,
  AboutInfo,
  Contact,
  LanguageList
} from '../components/aside'
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
        <LanguageList />
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
