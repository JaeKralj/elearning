import { getVideos } from './getVideos'

export async function getNextVideo({
  playlistId,
  videoId,
}: {
  playlistId: string
  videoId: string
}) {
  const videos = await getVideos(playlistId)

  const index: number = videos.findIndex(
    (video: any) => video.videoId === videoId
  )
  return videos.length - 1 !== index ? videos[index + 1] : null
}
