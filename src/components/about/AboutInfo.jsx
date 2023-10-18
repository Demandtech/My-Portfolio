import { Avatar } from '@nextui-org/react'

const AboutInfo = () => {
  return (
    <div className='flex gap-3 lg:items-center bg-dark2 p-3 rounded-lg'>
      <div className='w-20'>
        <Avatar
          className='w-20 h-20'
          radius='lg'
          src='https://i.pravatar.cc/150?u=a04258114e29026708c'
        />
      </div>
      <div className='pt-3 lg:pt-0'>
        <h6 className='mb-1.5 leading-3 text-[15px] text-white font-semibold'>
          Rasheed Adekunle
        </h6>
        <p className='text-[12px] text-gray-light leading-[15px]'>
          I&apos;m commited to becoming a world class developer, and building
          appealing apps
        </p>
      </div>
    </div>
  )
}

export default AboutInfo
