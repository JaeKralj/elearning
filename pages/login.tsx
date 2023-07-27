import Form from '@/components/shared/auth/Form'

export default function Login({}: propTypes) {
  return (
    <Form
      heading='Login'
      altText={["I don't have an account", 'Register']}
      endpoint='/api/login'
    />
  )
}

type propTypes = {}
