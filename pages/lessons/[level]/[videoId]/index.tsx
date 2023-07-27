import Button from '@/components/base/Button'
import CustomFragment from '@/components/base/CustomFragment'
import BackBtn from '@/components/shared/misc/BackBtn'
import Link from 'next/link'
// import { getVideos } from '../page'
import { getNextVideo } from '@/pages/api/helpers/videos/getNextVideo'
import { getVideo } from '@/pages/api/helpers/videos/getVideo'
import { getVideos } from '@/pages/api/helpers/videos/getVideos'
import type { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export async function getStaticProps({ params }: any) {
  const video = await getVideo({
    playlistId: params.level,
    videoId: params.videoId,
  })
  const nextVideo = await getNextVideo({
    playlistId: params.level,
    videoId: params.videoId,
  })
  return {
    props: {
      video,
      nextVideo,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ context }: any) => {
  // TODO: get levels from db
  const videos = await getVideos('basic')
  const paths = videos.map((video: any) => ({
    params: { videoId: video.videoId, level: 'basic' },
  }))
  return { paths, fallback: false }
}

export default function Lessons({ video, nextVideo }: propTypes) {
  const router = useRouter()
  return (
    <CustomFragment>
      <main className='p-8 flex flex-col justify-between min-h-screen'>
        <div>
          <div className='flex items-center'>
            <BackBtn />
            <h1 className='mx-auto text-base md:text-xl font-medium'>
              {video.title}
            </h1>
          </div>

          <iframe
            src={`https://www.youtube.com/embed/${video?.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            className='mx-auto my-5 w-[17.5rem] md:min-w-[560px] md:min-h-[19.6875rem] h-[10rem]'
          ></iframe>
        </div>
        <Link
          href={
            nextVideo
              ? `/lessons/${router.query.level}/${nextVideo.videoId}`
              : '/levels'
          }
          className='mx-auto'
        >
          <Button
            styleArr={['secondary', 'inactive']}
            name='button'
            type='button'
          >
            {nextVideo ? 'Next' : 'Finish'}
          </Button>
        </Link>
      </main>
    </CustomFragment>
  )
}

type propTypes = {
  params: {
    videoId: string
    level: string
  }
  video: any
  nextVideo: any
}
