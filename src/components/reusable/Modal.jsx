import { Dialog } from '@headlessui/react'
import PropTypes from 'prop-types'
import { CloseIcon } from '../../assets/svgs'
import { useDispatch } from 'react-redux'
import { getSearchProjects } from '../../redux/thunks/projectThunk'
import { useMemo, useState } from 'react'

export default function MyDialog({ children, isOpen, setIsOpen, title }) {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()

  const debounce = () => {
    let timeoutID
    return (e) => {
      setSearchQuery(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(getSearchProjects(e.target.value))
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <Dialog
      className=' fixed inset-0 w-screen bg-[rgba(0,0,0,.25)] flex items-center justify-center backdrop-blur-[10px] z-50'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel
        className={
          'relative bg-dark1 w-full md:max-w-[550px] rounded-lg border border-dark4 outline ouline-dark4 h-screen md:h-[400px] overflow-y-auto scroll-m-1'
        }
      >
        <Dialog.Title className='px-2 py-4 border-b border-dark4 top-0 sticky bg-dark2'>
          <div className='flex gap-5 justify-between text-white'>
            {title ? (
              <p className='text-xl'>{title}</p>
            ) : (
              <input
                placeholder='Search...'
                type='text'
                className='focus:outline-none w-full pl-3'
                style={{ background: 'transparent' }}
                value={searchQuery}
                onChange={optimizedDebounce}
              />
            )}
            <button
              onClick={() => setIsOpen(false)}
              className='text-2xl font-light'
            >
              <CloseIcon />
            </button>
          </div>
        </Dialog.Title>
        <div className=''>
          <div className='h-[calc(100vh-50px)]  md:h-full border broder-[#ffffff] overflow-y-auto'>
            {children}
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

MyDialog.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  title: PropTypes.string,
}
