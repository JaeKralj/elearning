export async function getVideos(playlistId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ROOT_URL}/api/videos?id=${playlistId}`
  )

  if (!res.ok) {
    throw new Error('failed to fetch videos')
  }
  return await res.json()
}
