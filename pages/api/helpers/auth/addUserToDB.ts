import { db } from '@/firebase/config'
import { doc, setDoc } from 'firebase/firestore'

export async function addUserToDB({
  userId,
  email,
}: {
  userId: string
  email: string
}) {
  await setDoc(doc(db, 'users', userId), {
    uid: userId,
    email: email,
    last_played: {
      videoId: '',
      playlistId: '',
    },
  })
}
