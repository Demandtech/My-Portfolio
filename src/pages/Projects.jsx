/* eslint-disable react-hooks/exhaustive-deps */
import NormalLayout from '../layouts/NormalLayout'
import {
  getAllProjects,
  getLanguageProjects,
} from '../redux/thunks/projectThunk'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsTab from '../components/projects/ProjectsTab'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectCardSkeleton from '../components/projects/ProjectCardSkeleton'
import { useEffect, useState } from 'react'
import EmptyIcon from '../assets/svgs/EmptyIcon'

const Project = () => {
  const dispatch = useDispatch()
  const { projects, error_message, isLoading } = useSelector(
    (store) => store.projects
  )
  const searchParams = new URLSearchParams(location.search)
  const languageParam = searchParams.get('language')
  const [language, setLanguage] = useState(languageParam)

  useEffect(() => {
    if (!language || language === 'All') {
      dispatch(getAllProjects())
    } else {
      const payload = {
        language: language,
      }
      dispatch(getLanguageProjects(payload))
    }
  }, [language])

  return (
    <NormalLayout
      page='Projects'
      content='This is where you find all my public projects in one place'
      activePage='projects'
    >
      <div>
        <ProjectsTab setLanguage={setLanguage} />
        <div className='px-2 grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2'>
          {projects.length > 0 &&
            !isLoading &&
            projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
        </div>
        <div>
          {projects.length === 0 && error_message && (
            <div className='text-gray-light flex flex-col items-center text-lg pt-20 w-full gap-5 max-w-[400px] mx-auto'>
              <EmptyIcon />
              <p className='text-center'>{error_message}</p>
            </div>
          )}
        </div>
        <div className='px-2 grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2'>
          {isLoading &&
            projects.length === 0 &&
            ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'].map(
              (_, index) => <ProjectCardSkeleton key={index} />
            )}
        </div>
        <div className='sticky bottom-0 bg-dark3 w-full h-8'></div>
      </div>
    </NormalLayout>
  )
}

export default Project
