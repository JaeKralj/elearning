import Form from '@/components/shared/auth/Form'

export default function SignUp({ setNav }: propTypes) {
  setNav(false)
  return (
    <Form
      heading='Register'
      altText={['I have an account', 'Login']}
      endpoint='/api/signup'
    />
  )
}

type propTypes = {
  setNav: React.Dispatch<React.SetStateAction<boolean>>
}
