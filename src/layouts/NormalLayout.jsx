import PropTypes from 'prop-types'
import { LeftAside, SmallAside, Navbar, RightAside } from '../components'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import MyMenu from '../components/MyMenu'
import SearchModal from '../components/SearchModal'
import Head from './Head'
import { setActivePage } from '../redux/slices/featureSlice'
import { useDispatch } from 'react-redux'
useDispatch

function NormalLayout({ children, page, content, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const location = useLocation()
  const path = location.pathname

  const dispatch = useDispatch()

  dispatch(setActivePage(activePage))

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      setIsSearchModalOpen(!isSearchModalOpen)
    }
  })

  return (
    <>
      <Head page={page} content={content} />

      <div
        className={`min-h-screen  ${path === '/' ? 'home-layout' : 'layout'}`}
      >
        <div className='bg-dark1 '>
          <Navbar setIsOpen={setIsSearchModalOpen} />
          <div className={`${path !== '/' ? 'inner-layout' : ''}`}>
            <div
              className={`${
                path === '/'
                  ? 'hidden'
                  : 'hidden lg:block bg-dark2 text-gray-light lg:h-[calc(100vh-78px)] overflow-y-scroll'
              }`}
            >
              <LeftAside />
            </div>
            <div
              className={`h-[calc(100vh-70px)] lg:h-[calc(100vh-78px)] ${
                page !== 'Welcome' ? 'bg-dark2' : ''
              } overflow-y-auto relative lg:pb-5`}
            >
              <div className='bg-dark1 h-full'>
                <div
                  className={`${
                    page !== 'Welcome' ? 'bg-dark2 p-2' : ''
                  }  h-full`}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[60px] flex items-center flex-col lg:w-full overflow-y-auto bg-dark2'>
          <RightAside />
          <SmallAside setIsOpen={setIsMenuOpen} />
        </div>
        <MyMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <SearchModal
          isOpen={isSearchModalOpen}
          setIsOpen={setIsSearchModalOpen}
        />
      </div>
    </>
  )
}

NormalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired,
  content: PropTypes.string,
  activePage: PropTypes.string,
}

export default NormalLayout
