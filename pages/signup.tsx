import Form from '@/components/shared/auth/Form'
import { useEffect } from 'react'

export default function SignUp({ setNav }: propTypes) {
  useEffect(() => {
    setNav(false)
    return setNav(true)
  }, [])

  return (
    <Form
      heading='Register'
      altText={['I have an account', 'Login']}
      endpoint='/api/signup'
      altLink='/login'
    />
  )
}

type propTypes = {
  setNav: React.Dispatch<React.SetStateAction<boolean>>
}
