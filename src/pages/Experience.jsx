import ExperienceCard from '../components/experience/ExperienceCard'
import NormalLayout from '../layouts/NormalLayout'
import { experiences } from '../utils/data'

const Experience = () => {
  return (
    <NormalLayout
      page='Experience'
      content={'My Journey so far as a software developer'}
      activePage='experience'
    >
      <div className='px-1.5 md:px-2 lg:px-4 relative pb-5'>
        <div className='sticky top-0 bg-dark3 py-2 lg:py-4'>
          <h2 className='text-white text-2xl lg:text-4xl font-black '>
            Experience
          </h2>
        </div>
        <div className='text-white'>
          <p className='text-base font-normal'>
            I&apos;ve always aimed to do my best in all the projects I&apos;ve
            been a part of. I pay attention to things like making sure the code
            is safe and efficient, reusing code when it makes sense, and making
            the website capable of handling more work as needed. When I tackle
            problems, I think about a lot of different things to come up with
            solutions. My journey as a web developer is an interesting story
            about how I&apos;ve improved as a programmer, with the help of
            various people, companies, and organizations.
          </p>
          <div className='flex flex-col gap-5 mt-5'>
            {experiences.map((exp, index) => {
              return <ExperienceCard {...exp} key={index} />
            })}
          </div>
        </div>
      </div>
      <div className='sticky bottom-0 bg-dark3 w-full h-8'></div>
    </NormalLayout>
  )
}

export default Experience
