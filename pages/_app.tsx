import AuthRedirect from '@/components/AuthRedirect'
import Navbar from '@/components/shared/misc/Navbar'
import { UserProvider } from '@/contexts/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  /**
   * ? should i add navbar by using router.pathname to check the current route and show the header or not, or by passing useState props to the page. or use Component.hideNav
   */
  const [nav, setNav] = useState<boolean>(true)
  return (
    <UserProvider>
      <AuthRedirect />
      <Component {...pageProps} setNav={setNav} />
      {nav && <Navbar />}
    </UserProvider>
  )
}
