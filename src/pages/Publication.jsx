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
      <div className='text-white'>Publication</div>
    </NormalLayout>
  )
}

export default Publication
