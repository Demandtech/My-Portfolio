import NormalLayout from '../layouts/NormalLayout'

const Network = () => {
  return (
    <NormalLayout
      page='Network'
      content={
        'Amazing people I have meet and the connection I have made so far'
      }
      activePage='network'
    >
      <div className='px-4 relative'>
        <div className='sticky top-0 bg-dark3 py-4'>
          <h2 className='text-white text-2xl lg:text-4xl font-black '>
            Network
          </h2>
        </div>
      </div>
    </NormalLayout>
  )
}

export default Network
