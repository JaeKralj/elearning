import * as yup from 'yup'

export default async function validateAuthInputs({
  email,
  password,
}: {
  email: string
  password: string
}) {
  let userSchema = yup.object({
    email: yup.string().email('Invalid email'),
    password: yup.string().min(6, 'Password must be at least 6 characters'),
  })
  try {
    return await userSchema.validate({ email, password })
  } catch (error) {
    return error
  }
}
