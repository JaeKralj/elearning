// import { getVideos } from '@/app/lessons/[level]/page'
import { NextApiRequest, NextApiResponse } from 'next'
import { getLastPlayed } from './helpers/videos/getLastPlayed'
import { getVideo } from './helpers/videos/getVideo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchParams } = new URL(
    req.url as string,
    `http://${req.headers.host}`
  )
  const uid = searchParams.get('uid')
  try {
    const last_played = await getLastPlayed(uid as string)
    const video = await getVideo({
      playlistId: last_played.playlistId,
      videoId: last_played.videoId,
    })
    return res.status(200).json(video)
  } catch (error) {
    res.status(500).json({ error })
  }
}
