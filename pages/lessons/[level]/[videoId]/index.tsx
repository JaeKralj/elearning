import Button from '@/components/base/Button'
import CustomFragment from '@/components/base/CustomFragment'
import BackBtn from '@/components/shared/misc/BackBtn'
import Link from 'next/link'
// import { getVideos } from '../page'
import { getNextVideo } from '@/pages/api/helpers/videos/getNextVideo'
import { getVideo } from '@/pages/api/helpers/videos/getVideo'
import { useRouter } from 'next/router'
import YouTube from './YouTube'

export async function getServerSideProps({ params }: any) {
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

export default function Lessons({ video, nextVideo }: propTypes) {
  const router = useRouter()
  return (
    <CustomFragment>
      <main className='p-8 flex flex-col justify-between min-h-screen'>
        <div>
          <div className='flex items-center'>
            <BackBtn />
            <h1 className='mx-auto text-base text-center md:text-xl font-medium'>
              {video.title}
            </h1>
          </div>

          <YouTube
            playlistId={router.query.level as string}
            videoId={video?.videoId}
            key={0}
          />
          {/* <iframe
            src={`https://www.youtube.com/embed/${video?.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            className='mx-auto my-5 w-[17.5rem] md:min-w-[560px] md:min-h-[19.6875rem] h-[10rem]'
            key={1}
          ></iframe> */}
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
