import { Akshar } from 'next/font/google'
const akshar = Akshar({ subsets: ['latin'] })

export default function CustomFragment({ children }: propTypes) {
  return (
    <main className={`mx-auto max-w-[900px] ${akshar.className}`}>
      {children}
    </main>
  )
}

type propTypes = { children: React.ReactNode }
