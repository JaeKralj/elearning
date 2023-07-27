import Card from '@/components/base/Card'
import CustomFragment from '@/components/base/CustomFragment'
import BackBtn from '@/components/shared/misc/BackBtn'
import { getVideos } from '@/pages/api/helpers/videos/getVideos'
import type { GetStaticPaths } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticProps({ params }: any) {
  const videos = await getVideos(params.level)
  return {
    props: {
      videos,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: get levels from db
  const levels = ['basic', 'intermediate', 'advanced']
  const paths = levels.map(level => ({ params: { level } }))
  return { paths, fallback: false }
}

export default function Lessons({ videos }: { videos: any[] }) {
  const router = useRouter()

  console.log()
  return (
    <CustomFragment>
      <main className='p-8'>
        <div className='flex items-center'>
          <BackBtn />
          <h1 className='capitalize mx-auto text-base md:text-xl font-medium'>
            {router.query.level}
          </h1>
        </div>
        <div className='grid grid-cols-2 text-center'>
          {videos &&
            videos.map((video: any, i: number) => (
              <Link href={`/lessons/${router.query?.level}/${video?.videoId}`}>
                <Card>
                  <div>
                    <Image
                      src={video.thumbnail?.url}
                      width={video.thumbnail?.width}
                      height={video.thumbnail?.height}
                      sizes='(min-width: 768px) 20rem,'
                      alt={video.title}
                      priority={i < 3}
                    />
                  </div>
                  <div>
                    <p className='text-sm my-2 lg:text-xl'>{video.title}</p>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </main>
    </CustomFragment>
  )
}
