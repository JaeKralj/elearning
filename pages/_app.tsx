import { UserProvider } from '@/components/AuthContext'
import Navbar from '@/components/shared/misc/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps, router }: AppProps) {
  /**
   * ? should i add navbar by using router.pathname to check the current route and show the header or not, or by passing useState props to the page.
   */
  const [nav, setNav] = useState<boolean>(true)
  return (
    <UserProvider>
      <Component {...pageProps} setNav={setNav} />
      {nav && <Navbar />}
    </UserProvider>
  )
}
