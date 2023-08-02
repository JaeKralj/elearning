import Form from '@/components/shared/auth/Form'
import { useEffect } from 'react'

export default function Login({ setNav }: propTypes) {
  useEffect(() => {
    setNav(false)
    return setNav(true)
  }, [])
  return (
    <Form
      heading='Login'
      altText={[
        'log in with testing3@test.com, password: test123 or',
        'Register',
      ]}
      altLink='/signup'
      endpoint='/api/login'
    />
  )
}

type propTypes = {
  setNav: React.Dispatch<React.SetStateAction<boolean>>
}
