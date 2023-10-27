import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchItem = ({ title, text, href, setIsOpen }) => {
  return (
    <div
      className='border-t border-dark4 py-2'
      onClick={() => setIsOpen(false)}
    >
      <Link to={href}>
        <h6 className='text-white font-normal text-base '>{title}</h6>
        <p className='text-gray-dark text-sm line-clamp-2'>{text}</p>
      </Link>
    </div>
  )
}

SearchItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  setIsOpen: PropTypes.func,
}

export default SearchItem
