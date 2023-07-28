import { UserProvider } from '@/components/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  /**
   * ? should i add navbar by using router.pathname to check the current route and show the header or not, or by passing useState props to the page.
   */
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
