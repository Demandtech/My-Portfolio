import { RouterProvider } from 'react-router-dom'

import router from './router'

function App() {
  return (
    <div className='bg-dark1 min-h-screen max-w-[1440px] mx-auto'>
     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
