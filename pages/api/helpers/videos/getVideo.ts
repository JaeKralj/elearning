export async function getVideo({
  playlistId,
  videoId,
}: {
  playlistId: string
  videoId: string
}) {
  const res = await fetch(
    `/api/video?videoId=${videoId}&playlistId=${playlistId}`
  )

  if (!res.ok) {
    throw new Error('failed to fetch video')
  }
  return await res.json()
}
