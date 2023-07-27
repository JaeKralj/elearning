import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BackBtn({}: propTypes) {
  const router = useRouter()
  return (
    <Image
      src='/icons/arrow_left.svg'
      width={24}
      height={24}
      alt='previous page'
      onClick={() => router.back()}
      className='cursor-pointer'
    />
  )
}

type propTypes = {}
