import Card from '@/components/base/Card'
import CustomFragment from '@/components/base/CustomFragment'
import { useUser } from '@/contexts/AuthContext'
import { getGreeting } from '@/utils/getGreeting'
import { Akshar } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const akshar = Akshar({ subsets: ['latin'] })

export default function Home() {
  const greeting = getGreeting()
  return (
    <CustomFragment>
      <div className='flex min-h-screen flex-col p-8 text-grey-400'>
        <div className='flex items-center justify-between'>
          <h1 className='capitalize text-grey-400 md:text-3xl text-lg font-semibold'>
            {greeting}
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
              Static Weekly Study <br />5 hours
            </p>
          </div>
        </div>
        {/* last lesson */}
        <LastPlayed />
      </div>
    </CustomFragment>
  )
}

// TODO: add link to last lesson.
// !NOTE: fix video object, add playlist id
function LastPlayed() {
  // @ts-ignore
  const { user } = useUser()

  const [video, setVideo] = useState(null)

  const fetchLastPlayed = async () => {
    const res = await fetch(
      'http://localhost:3000/api/last_played?uid=' + user?.uid
    )
    setVideo(await res.json())
  }

  useEffect(() => {
    fetchLastPlayed()
  }, [])

  return (
    <Card className='!p-0 rounded-md w-[12.5rem]'>
      <h2 className='text-base font-medium my-2 '>Last Lesson</h2>
      <Image
        // @ts-ignore
        src={video?.thumbnail?.url}
        // @ts-ignore
        // width={video?.thumbnail?.width}
        width={640}
        // @ts-ignore
        height={480}
        sizes='(min-width: 768px) 20rem,'
        // @ts-ignore
        alt={video?.title}
      />
      <div className='flex items-center justify-between'>
        <p className='text-xs font-medium md:text-sm'>
          {
            // @ts-ignore
            video?.title || 'Fetching...'
          }
        </p>
      </div>
    </Card>
  )
}
