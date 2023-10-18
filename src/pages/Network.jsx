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
      <div className='text-white'>Network</div>
    </NormalLayout>
  )
}

export default Network
