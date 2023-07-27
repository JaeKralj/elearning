import Card from '@/components/base/Card'
import CustomFragment from '@/components/base/CustomFragment'
import { Akshar } from 'next/font/google'
import Image from 'next/image'

const akshar = Akshar({ subsets: ['latin'] })

export default function Home() {
  return (
    <CustomFragment>
      <div className='flex min-h-screen flex-col p-8 text-grey-400'>
        <div className='flex items-center justify-between'>
          <h1 className='text-grey-400 md:text-3xl text-lg font-semibold'>
            Good Evening!
          </h1>
          <div className='border-primary-100 border-2 h-11 rounded-full aspect-square'>
            {/* add profile image here */}
          </div>
        </div>
        {/* weekly hours */}
        <div className='relative mx-auto my-9 '>
          <div className='z-[1] relative animate-spin-slow'>
            <Image
              src='/icons/wave.svg'
              width={270}
              height={219}
              alt='wave'
              aria-hidden='true'
            />
          </div>
          <div className='absolute top-0 z-10 animate-spin-reverse-slow'>
            <Image
              src='/icons/wave2.svg'
              width={250}
              height={218}
              alt='wave'
              aria-hidden='true'
            />
          </div>
          {/* linear-gradient(218deg, #555355 0%, #030305 100%) */}
          <div className='bg-gradient-218 from-[#555355] to-[#030305] from-0% to-100% h-[9rem] aspect-square absolute top-14 z-20 left-16 rounded-full flex items-center justify-center text-center'>
            <p>
              Weekly Study <br />5 hours
            </p>
          </div>
        </div>
        {/* last lesson */}
        <Card className='!p-0 rounded-md w-[12.5rem]'>
          <h2 className='text-base font-medium my-2'>Last Lesson</h2>
          <Image
            src='/images/rectangle6.png'
            width={200}
            height={200}
            alt='lesson'
          />
          <div className='flex items-center justify-between'>
            <p className='text-base font-medium'>Lesson Title</p>
            <Image
              src='/icons/bookmark.svg'
              width={24}
              height={24}
              alt='bookmark'
            />
          </div>
        </Card>
      </div>
    </CustomFragment>
  )
}
