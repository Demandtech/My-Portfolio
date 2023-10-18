
const Copyright = () => {
  const date = new Date().getFullYear()

  return (
    <div className='p-2 rounded-lg'>
      <span className='text-gray-light text-small'>
        &copy; {date} Rasheed Adekunle
      </span>
    </div>
  )
}

export default Copyright
