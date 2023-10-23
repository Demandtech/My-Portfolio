import { createBrowserRouter } from 'react-router-dom'
import {
  Home,
  About,
  Projects,
  Roadmap,
  Education,
  Experience,
  Publication,
  Network,
  SingleProject,
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
    element: <Projects />,
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
  {
    path: '/projects/:id',
    element: <SingleProject />,
  },
])

export default router
