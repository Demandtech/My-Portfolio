import NormalLayout from '../layouts/NormalLayout'
import img from '../assets/images/farm.jpeg'

const About = () => {
  return (
    <>
      <NormalLayout
        page='About'
        content='This is where you will know more about me'
        activePage='about'
      >
        <div className='px-4 relative'>
          <div className='sticky top-0 bg-dark3 py-4'>
            <h2 className='text-white text-2xl lg:text-4xl font-black '>
              About me
            </h2>
          </div>
          <img
            className='rounded-2xl mt-2 h-[160px] w-full object-cover'
            src={img}
            alt='Farm land'
          />
          <div className='text-white pt-3 flex flex-col gap-5'>
            <p>
              In the tranquil interludes of my life, I navigate two distinct yet
              harmonious worlds. By day, I&apos;m deeply engrossed in the world
              of web development, crafting digital landscapes and bringing code
              to life on screens. However, when the sun sets, I eagerly
              transition into another realm, one where the soil becomes my
              canvas, and the harvest my masterpiece.
            </p>
            <p>
              I spend my evenings planting seeds, tending to my garden, and
              raising a small flock of chickens. The satisfaction of knowing
              that the food on my plate is a result of my own toil is
              unparalleled. It&apos;s a journey of self-sufficiency, a return to
              the fundamentals of life, and a deep appreciation for the art of
              sustainable living.
            </p>
            <p>
              My vision for this endeavor is simple: to cultivate what I
              consume. It&apos;s not about profit, but about the satisfaction of
              nurturing the land and reaping the literal fruits of my labor.
              It&apos;s about understanding the intricate dance of nature, where
              each season holds its unique enchantment and challenges.
            </p>
            <p>
              In the quiet moments of my rural sanctuary, I find solace and
              inspiration. The natural world offers me a canvas to create,
              albeit in a different form. The satisfaction of growing my own
              food provides a deep sense of connection to the land and a
              profound respect for the cycles of life.
            </p>
            <p>
              I am Rasheed Adekunle, a passionate web developer who find joy in
              the art of cultivation and creativity in the fields.
            </p>
          </div>
          <div className='sticky bottom-0 bg-dark3 w-full h-8'></div>
        </div>
      </NormalLayout>
    </>
  )
}

export default About
