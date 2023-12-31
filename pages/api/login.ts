import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import validateAuthInputs from './helpers/auth/validateInput'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // @ts-ignore
  const { email, password } = req.body
  try {
    if (email && password) {
      const validated: any = await validateAuthInputs({ email, password })
      if (validated.errors) {
        return res.status(400).json({ errors: validated.errors }) // bad request
      }
      const userCred = await signInWithEmailAndPassword(
        auth,
        validated.email,
        validated.password
      )
      return res.status(200).json(userCred.user)
    }
  } catch (error) {
    return res.status(500).json({ error })
  }
}
