import RoadmapCard from '../components/roadmap/RoadmapCard'
import NormalLayout from '../layouts/NormalLayout'
import { roadmaps } from '../utils/data'

const Roadmap = () => {
  return (
    <NormalLayout
      page='Roadmap'
      activePage='roadmap'
      content={
        'From the beginning to where I am now and I hope I am able to impress or encourage you'
      }
    >
      <div className='px-1.5 md:px-2 lg:px-4 relative pb-5'>
        <div className='sticky top-0 bg-dark3 py-2 lg:py-4'>
          <h2 className='text-white text-2xl lg:text-4xl font-black '>
            Roadmap
          </h2>
        </div>
        <div className='text-white text-base font-normal flex flex-col gap-3 mb-5'>
          <p>
            My journey into the world of programming began in December 2021,
            after a long period of searching for my true passion. Having
            discontinued my university education, I found myself at a
            crossroads, unsure of my path. During this time, I stumbled upon the
            world of computer programming, and it quickly captured my heart.
          </p>
          <p>
            I started exploring various programming languages and technologies,
            trying to comprehend the vast opportunities they offered.
            JavaScript, in particular, stood out due to its versatility and
            widespread use.
          </p>
          <p>
            Learning to program became a significant part of my life, and it
            opened up a world of creativity and problem-solving that I had never
            experienced before. The thrill of building and seeing my creations
            come to life was like nothing else.
          </p>
          <p>
            As I continued on this new path, my passion for web development grew
            stronger. The ability to shape and create digital experiences
            fascinated me, and I found myself constantly brainstorming new
            projects and ideas.
          </p>
        </div>
        <div className='flex flex-col gap-3 mb-5'>
          {roadmaps.map((roadmap, index) => {
            return <RoadmapCard {...roadmap} key={index} />
          })}
        </div>
        <p className='text-white text-base'>
          There are many other things that I learned over the years, interesting
          activities I participated in, experiences that shaped me, and
          challenges that I don&apos;t need to mention. All of these only made
          me love computer science and programming even more. I watch videos and
          read articles about different programming languages, libraries,
          frameworks, emerging technologies, and other topics at my leisure, not
          because I need to know everything, but because I find learning amusing
          and have nothing more interesting to do.
        </p>
      </div>
      <div className='sticky bottom-0 bg-dark3 w-full h-8'></div>
    </NormalLayout>
  )
}

export default Roadmap
