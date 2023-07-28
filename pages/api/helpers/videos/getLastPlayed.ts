import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
export async function getLastPlayed(uid: string) {
  const docRef = doc(db, 'users', uid as string)
  const userSnap = await getDoc(docRef)
  if (userSnap.exists()) {
    return userSnap.data().last_played
  } else {
    throw new Error('No such document!')
  }
}
