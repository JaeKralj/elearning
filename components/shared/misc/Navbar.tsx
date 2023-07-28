import CustomFragment from '@/components/base/CustomFragment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({}: propTypes) {
  const { pathname } = useRouter()
  return (
    <nav className='bg-background-100 h-[3.75rem] shadow-[4px_-4px_4px_0px_rgb(11_15_24_/_0.15)] flex items-center'>
      <CustomFragment>
        <ul className='flex items-center justify-center gap-5'>
          <Link
            href='/lessons'
            className={`px-3 py-2 ${
              pathname === '/lessons' && 'bg-primary-200'
            } rounded-[1.5625rem]`}
          >
            <li className='flex gap-1 text-secondary font-medium items-center'>
              <Image
                src={
                  pathname === '/lessons'
                    ? '/icons/lessons_active.svg'
                    : '/icons/lessons.svg'
                }
                width={24}
                height={24}
                alt='go_to_lessons'
              />
              {pathname === '/lessons' && 'Lessons'}
            </li>
          </Link>
          <Link
            href='/'
            className={`px-3 py-2 ${
              pathname === '/' && 'bg-primary-200'
            } rounded-[1.5625rem]`}
          >
            <li className='flex gap-1 items-center text-secondary font-medium'>
              <Image
                src={
                  pathname === '/'
                    ? '/icons/home_active.svg'
                    : '/icons/home.svg'
                }
                width={24}
                height={24}
                alt='go_home'
              />
              {pathname === '/' && 'Home'}
            </li>
          </Link>
        </ul>
      </CustomFragment>
    </nav>
  )
}

type propTypes = {}
