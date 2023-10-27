import { useSelector } from 'react-redux'
import Modal from '../../components/reusable/Modal'
import PropTypes from 'prop-types'
import SearchItem from './SearchItem'
import { pages } from '../../utils/data'
import SearchItemkeleton from './SearchItemSkeleton'

const SearchModal = ({ isOpen, setIsOpen }) => {
  const { search_projects, isLoading } = useSelector((store) => store.projects)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='px-3 border-dark4'>
        {search_projects.length === 0 && !isLoading && (
          <div className=' '>
            <h3 className='text-gray-dark py-2 text-sm'>Pages</h3>
            {pages?.map((item, index) => {
              return <SearchItem {...item} key={index} setIsOpen={setIsOpen} />
            })}
          </div>
        )}
        {!isLoading && (
          <div>
            <h3 className='text-gray-dark py-2 text-sm'>Projects</h3>
            {search_projects.length > 0 &&
              search_projects.map((item, index) => {
                console.log(item)
                return (
                  <SearchItem
                    text={item.description}
                    title={item.name}
                    key={index}
                    href={`/projects/${item.id}`}
                    setIsOpen={setIsOpen}
                  />
                )
              })}
          </div>
        )}
        <div className='mt-5'>
          {isLoading &&
            [('*', '*', '*', '*')].map((_, index) => (
              <SearchItemkeleton key={index} />
            ))}
        </div>
      </div>
    </Modal>
  )
}

SearchModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  arr: PropTypes.array,
}

export default SearchModal
