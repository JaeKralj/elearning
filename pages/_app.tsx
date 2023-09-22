// import AuthRedirect from '@/components/AuthRedirect'
import Navbar from '@/components/shared/misc/Navbar'
import { UserProvider } from '@/contexts/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  /**
   * ? should i add navbar by using router.pathname to check the current route and show the header or not, or by passing useState props to the page. or use Component.hideNav
   */
  const [nav, setNav] = useState<boolean>(true)
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])
  return (
    <UserProvider>
      {/* <AuthRedirect /> */}
      {isLoading && (
        <div className='border-primary-100 border-4 aspect-square left-1/2 top-1/2 rounded-full absolute z-50 h-16 animate-ping' />
      )}
      <Component {...pageProps} setNav={setNav} />
      {nav && <Navbar />}
    </UserProvider>
  )
}
