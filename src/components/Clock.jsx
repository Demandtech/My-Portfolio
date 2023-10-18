import { useState, useEffect } from 'react'

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  return (
    <div className='flex text-gray-light gap-1 items-center font-thin  min-w-[150px]'>
      <div className='w-2 h-2 bg-[#86EFAC] rounded-full'></div>
      <span className='text-xs'>Current time:</span>
      <p className='text-xs'>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </p>
    </div>
  )
}

export default Clock
