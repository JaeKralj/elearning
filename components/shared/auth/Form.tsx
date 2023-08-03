'use client'
import Button from '@/components/base/Button'
import Input from '@/components/shared/auth/Input'
import { useUser } from '@/contexts/AuthContext'
import { Formik, Form as FormikForm } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as Yup from 'yup'

export default function Form({
  heading,
  altText,
  endpoint,
  altLink,
}: propTypes) {
  // @ts-ignore
  const { setUser } = useUser()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  const handleSubmit = async (values: FormVals) => {
    setLoading(true)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }
    const response = await fetch(endpoint, options)

    if (!response.ok) {
      setLoading(false)
      throw new Error('Network response was not ok')
    }
    const user = await response.json()
    if (user) setUser(JSON.stringify(user.uid))
    setLoading(false)
    router.push('/')
  }
  const router = useRouter()
  return (
    <main className='p-4 min-h-screen flex py-5 justify-center items-center flex-col relative'>
      {loading && (
        <div className='border-primary-100 border-4 aspect-square left-1/2 top-1/2 rounded-full absolute z-50 h-16 animate-ping' />
      )}
      <div className='mt-14'>
        <h1 className='text-3xl font-semibold my-10'>{heading}</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Required'),
          })}
          onSubmit={async values => {
            handleSubmit(values)
          }}
        >
          <FormikForm>
            <Input
              label='Email'
              id='email'
              type='email'
              placeholder='Enter Email'
            />
            <Input
              label='Password'
              id='password'
              type='password'
              placeholder='Enter Password'
            />
            <div className='flex flex-col gap-3 mt-5'>
              <Button
                styleArr={['primary', 'fill']}
                type='submit'
                name='submit'
              >
                Submit
              </Button>
              {/* <Button
                styleArr={['primary', 'outline']}
                type='button'
                name='SIGN_IN_WITH_GOOGLE'
              >
                With Google
              </Button> */}
            </div>
            <p className='text-base mt-8 text-center mb-14'>
              {altText[0]}{' '}
              <Link href={altLink} className='py-3'>
                <span className='text-xs font-semibold hover:text-primary-100 cursor-pointer transition ease-in-out'>
                  {altText[1]}
                </span>
              </Link>
            </p>
          </FormikForm>
        </Formik>
      </div>
    </main>
  )
}

type propTypes = {
  // altText[0] = main string, altText[1]== substring
  altText: [string, string]
  heading: string
  endpoint: string
  altLink: string
}

interface FormVals {
  email: string
  password: string
}
