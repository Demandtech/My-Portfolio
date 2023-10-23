import { Card, Skeleton } from '@nextui-org/react'

const ProjectCardSkeleton = () => {
  return (
    <Card
      className='w-full  p-2 bg-dark1 border-gray-dark border flex flex-col gap-2'
      radius='sm'
    >
      <div className='flex gap-2'>
        <Skeleton className='rounded-sm w-4 h-4 bg-dark4'>
          <div className='h-full w-full bg-dark3'></div>
        </Skeleton>
        <Skeleton className='rounded-sm bg-dark4 w-1/3 h-4'>
          <div className='h-4 rounded-lg  bg-dark3'></div>
        </Skeleton>
      </div>
      <div className='flex flex-col gap-2'>
        <Skeleton className='w-11/12 rounded-sm h-4 bg-dark4'>
          <div className='h-4 w-11/12  bg-dark3'></div>
        </Skeleton>
        <Skeleton className='w-11/12 h-4 rounded-sm bg-dark4'>
          <div className='h-4 w-11/12 rounded-sm  bg-dark3'></div>
        </Skeleton>
      </div>
      <div className='w-2/5 flex gap-2'>
        <Skeleton className='w-full h-4 rounded-sm bg-dark4'>
          <div className='h-4 w-full rounded-sm  bg-dark3'></div>
        </Skeleton>
        <Skeleton className='w-full h-4 rounded-sm bg-dark4'>
          <div className='h-4 w-full rounded-sm  bg-dark3'></div>
        </Skeleton>
        <Skeleton className='w-full h-4 rounded-sm bg-dark4'>
          <div className='h-4 w-full rounded-sm  bg-dark3'></div>
        </Skeleton>
      </div>
    </Card>
  )
}

export default ProjectCardSkeleton
