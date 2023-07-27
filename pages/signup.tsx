import Form from '@/components/shared/auth/Form'

export default function SignUp({}: propTypes) {
  return (
    <Form
      heading='Register'
      altText={['I have an account', 'Login']}
      endpoint='/api/signup'
    />
  )
}

type propTypes = {}
