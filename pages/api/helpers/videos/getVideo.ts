export async function getVideo({
  playlistId,
  videoId,
}: {
  playlistId: string
  videoId: string
}) {
  const res = await fetch(
    `http://localhost:3000/api/video?videoId=${videoId}&playlistId=${playlistId}`
  )

  if (!res.ok) {
    throw new Error('failed to fetch video')
  }
  return res.json()
}
