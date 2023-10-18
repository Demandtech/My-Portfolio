import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
const Head = ({ page, content }) => {
  return (
    <Helmet>
      <title>{page} - Rasheed Adekunle</title>
      <meta name='description' content={content} />
    </Helmet>
  )
}

Head.propTypes = {
  page: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default Head
