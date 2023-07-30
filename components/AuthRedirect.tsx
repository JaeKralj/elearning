import { useUser } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AuthRedirect() {
  // @ts-ignore
  const { user } = useUser()
  const { push, pathname } = useRouter()
  useEffect(() => {
    // @ts-ignore
    if (!user.uid && pathname !== '/login' && pathname !== '/signup') {
      push('/login')
    }
  })
  return <></>
}
