import { db } from '@/firebase/config'
import { doc, updateDoc } from 'firebase/firestore'
export async function addLastPlayed({
  videoId,
  playlistId,
  uid,
}: {
  videoId: string
  playlistId: string
  uid: string
}) {
  await updateDoc(doc(db, 'users', uid), {
    last_played: {
      videoId,
      playlistId,
    },
  })
}
