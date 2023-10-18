import { createBrowserRouter } from 'react-router-dom'
import {
  Home,
  About,
  Project,
  Roadmap,
  Education,
  Experience,
  Publication,
  Network,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Project />,
  },
  {
    path: '/roadmap',
    element: <Roadmap />,
  },
  {
    path: '/publication',
    element: <Publication />,
  },
  {
    path: '/network',
    element: <Network />,
  },
])

export default router
