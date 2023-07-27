export async function getVideos(playlistId: string) {
  const res = await fetch(`http://localhost:3000/api/videos?id=${playlistId}`)

  if (!res.ok) {
    throw new Error('failed to fetch videos')
  }
  return await res.json()
}
