import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchParams } = new URL(
    req.url as string,
    `http://${req.headers.host}`
  )
  const id = searchParams.get('id')
  const docRef = doc(db, 'levels', id as string)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return res.status(200).json(docSnap.data().videos)
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
    return res.status(404).json('no videos found')
  }
}
