import NormalLayout from '../layouts/NormalLayout'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleProject } from '../redux/thunks/projectThunk'
import { useDispatch, useSelector } from 'react-redux'
import BackArrowIcon from '../assets/svgs/BackArrowIcon'
import { useEffect } from 'react'

const SingleProject = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigae = useNavigate()
  const { single_project } = useSelector((store) => store.projects)

  useEffect(() => {
    if (id) {
      dispatch(getSingleProject(id))
    }
  }, [id, dispatch])

  if (single_project) {
    const { name, description, tools } = single_project
    return (
      <NormalLayout
        content={
          'Single Project Page, You can know more about each project I have worked on'
        }
        page='Project'
        activePage='project'
      >
        <div className='text-white flex justify-between p-5 w-full'>
          <button
            onClick={() => navigae(-1)}
            className='bg-dark4 p-2 rounded-lg flex items-center'
          >
            <BackArrowIcon />
          </button>
          <div className='gap-2 flex'>
            <button className='text-gray-light p-1  px-4 rounded-lg hover:bg-dark4 transition-all duration-200 leading-[5px] text-sm md:text-base'>
              <a href='#' className='leading-1'>
                Repository
              </a>
            </button>
            <button className='py-1 px-4 bg-white text-dark1 rounded-lg font-medium border-2 border-white hover:bg-dark1 hover:text-white transition-all duration-200 leading-[5px] text-sm md:text-base'>
              <a href='#'>App</a>
            </button>
          </div>
        </div>
        <div className='px-5 text-white'>
          <div>
            <h2 className=' font-black text-3xl mb-5'>{name}</h2>
            <p>{description}</p>
          </div>
          <h3 className='mt-10 text-lg font-black'>TOOLS</h3>
          <div className='flex flex-col gap-5 mt-3'>
            {tools?.map((tool) => {
              return (
                <div key={tool.id}>
                  <strong> {tool[0]}: </strong>
                  <span>{tool[1]}</span>
                </div>
              )
            })}
          </div>
        </div>
      </NormalLayout>
    )
  }
}

export default SingleProject
