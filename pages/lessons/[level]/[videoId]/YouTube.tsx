import { useUser } from '@/contexts/AuthContext'
import YouTubePlayer, { YouTubeProps } from 'react-youtube'

export default function YouTube({ videoId, playlistId }: propTypes) {
  // @ts-ignore
  const { user } = useUser()
  async function handlePlay() {
    try {
      const res = await fetch('http://localhost:3000/api/add_last_played', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoId, playlistId, uid: user.uid }),
      })
    } catch (error) {}
  }
  const ops: YouTubeProps['opts'] = {}
  return (
    <YouTubePlayer
      videoId={videoId}
      id='youtube_player'
      title='youtube_player'
      onPlay={handlePlay}
      iframeClassName='mx-auto my-5 w-[17.5rem] md:min-w-[40rem] md:min-h-[22.5rem] h-[10rem]'
    />
  )
}

type propTypes = {
  videoId: string
  playlistId: string
}
// ;<iframe
//   width='640'
//   height='360'
//   src='https://www.youtube.com/embed/LGQuIIv2RVA'
//   title='HTML and CSS for Beginners Part 1: Introduction to HTML'
//   frameborder='0'
//   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//   allowfullscreen
// ></iframe>
