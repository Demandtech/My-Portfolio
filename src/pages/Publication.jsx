import NormalLayout from '../layouts/NormalLayout'

const Publication = () => {
  return (
    <NormalLayout
      page='Publication'
      activePage='publication'
      content={
        'This is where you will find my articles if I have written any or my recommended articles'
      }
    >
      <div className='px-4 relative'>
        <div className='sticky top-0 bg-dark3 py-4'>
          <h2 className='text-white text-2xl lg:text-4xl font-black '>
            Education
          </h2>
        </div>
      </div>
    </NormalLayout>
  )
}

export default Publication
