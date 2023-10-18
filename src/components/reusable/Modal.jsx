import { Dialog } from '@headlessui/react'
import PropTypes from 'prop-types'
import { CloseIcon } from '../../assets/svgs'

export default function MyDialog({ children, isOpen, setIsOpen, title }) {
  return (
    <Dialog
      className=' fixed inset-0 w-screen bg-[rgba(0,0,0,.25)] flex items-center justify-center backdrop-blur-[10px] z-50'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel
        className={
          ' bg-dark1 w-full md:max-w-[550px] rounded-lg border border-dark4 outline ouline-dark4 h-screen md:h-[500px]'
        }
      >
        <Dialog.Title className='p-4 border-b border-dark4'>
          <div className='flex gap-5 justify-between text-white'>
            {title ? (
              <p className='text-xl'>{title}</p>
            ) : (
              <input
                placeholder='Search...'
                type='text'
                className='focus:outline-none w-full pl-3'
                style={{ background: 'transparent' }}
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
          <div className='h-[calc(100vh-50px)] overflow-y-auto md:max-h-[420px] border broder-[#ffffff]'>
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
