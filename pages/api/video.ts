// import { getVideos } from '@/app/lessons/[level]/page'
import { NextApiRequest, NextApiResponse } from 'next'
import { getVideos } from './helpers/videos/getVideos'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchParams } = new URL(
    req.url as string,
    `http://${req.headers.host}`
  )
  const playlistId = searchParams.get('playlistId')
  const videoId = searchParams.get('videoId')
  const videos = await getVideos(playlistId as string)

  return res
    .status(200)
    .json(videos.find((video: any) => video.videoId === videoId))
}
