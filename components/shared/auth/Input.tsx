'use client'
import { useField } from 'formik'
import Image from 'next/image'
import { useState } from 'react'

export default function Input({
  label,
  id,
  type: propType,
  placeholder,
}: propTypes) {
  const [field, meta] = useField({ name: id, type: propType })
  const [type, setType] = useState(propType)

  return (
    <label
      htmlFor={id}
      className='flex flex-col max-w-md gap-2 my-4 text-grey-400 relative'
    >
      {label}

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...field}
        className='bg-secondary py-4 px-[.9375rem] text-grey-200 placeholder:text-grey-200 text-base focus:border-secondary-100 outline-none'
      />
      {id.toLocaleLowerCase() === 'password' && (
        <div
          className={`absolute right-0 cursor-pointer py-4 px-2 ${
            meta.touched && meta.error ? 'top-[30%]' : 'top-[38%]'
          }`}
          onClick={() => {
            type === 'text' ? setType('password') : setType('text')
          }}
        >
          <Image
            src={type === 'text' ? '/icons/hide.svg' : '/icons/show.svg'}
            width={24}
            height={24}
            alt='hidepassword'
          />
        </div>
      )}

      {meta.touched && meta.error && (
        <small className='-mt-1.5 text-xs px-2 text-red-600'>
          {meta.error}
        </small>
      )}
    </label>
  )
}

type propTypes = {
  type: string
  id: string
  label: string
  placeholder: string
}
