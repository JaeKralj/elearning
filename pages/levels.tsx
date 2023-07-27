import Card from '@/components/base/Card'
import CustomFragment from '@/components/base/CustomFragment'
import Link from 'next/link'

export default function Lessons({}: propTypes) {
  return (
    <CustomFragment>
      <main className='flex min-h-screen flex-col p-7 text-grey-400'>
        <Link href='/lessons/basic'>
          <Card className='bg-[rgb(26_132_68_/0.30)] h-24 flex items-center border-2 border-[#1A753F]'>
            <p>Elementary</p>
          </Card>
        </Link>
        <Link href='/lessons/intermediate'>
          <Card className='bg-[rgb(172_71_14_/0.30)] h-24 flex items-center border-2 border-[#AC470E]'>
            <p>Intermediate</p>
          </Card>
        </Link>
        <Link href='/lessons/advanced'>
          <Card className='bg-[rgb(255_204_1_/0.20)] h-24 flex items-center border-2 border-[#FFCC01]'>
            <p>Advanced</p>
          </Card>
        </Link>
      </main>
    </CustomFragment>
  )
}

type propTypes = {}
