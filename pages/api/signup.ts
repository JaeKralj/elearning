import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { addUserToDB } from './helpers/auth/addUserToDB'
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
      const { user } = await createUserWithEmailAndPassword(
        auth,
        validated.email,
        validated.password
      )

      await addUserToDB({
        userId: user.uid,
        email: user.email as string,
      })
      return res.status(200).json(user)
    }
  } catch (error) {
    return res.status(500).json({ error })
  }
}
