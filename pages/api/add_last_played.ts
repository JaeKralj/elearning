// import { getVideos } from '@/app/lessons/[level]/page'
import { NextApiRequest, NextApiResponse } from 'next'
import { addLastPlayed } from './helpers/videos/addLastPlayed'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('hit server')
  const { videoId, playlistId, uid } = req.body
  try {
    addLastPlayed({
      videoId: videoId as string,
      playlistId: playlistId as string,
      uid: uid as string,
    })
    return res.status(200).json({ message: 'success' })
  } catch (error) {
    res.status(500).json({ error })
  }
}
