/* eslint-disable react-hooks/exhaustive-deps */
import NormalLayout from '../layouts/NormalLayout'
import getAllRepos from '../redux/thunks/projectThunk'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsTab from '../components/projects/ProjectsTab'
import ProjectCard from '../components/projects/ProjectCard'
import { useEffect } from 'react'
const Project = () => {
  const dispatch = useDispatch()
  const { display_repos, per_page } = useSelector((store) => store.projects)

  useEffect(() => {
    dispatch(getAllRepos(per_page))
  }, [])

  return (
    <NormalLayout
      page='Projects'
      content='This is where you find all my public projects in one place'
      activePage='project'
    >
      <div>
        <ProjectsTab />
        <div className='px-5'>
          {display_repos.map((repo, index) => (
            <ProjectCard {...repo} key={index} />
          ))}
        </div>
      </div>
    </NormalLayout>
  )
}

export default Project
