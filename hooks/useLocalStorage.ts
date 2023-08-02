import { useState } from 'react'

type ValueSetter = (newValue: string) => void

export default function useLocalStorage(
  keyName: string,
  defaultValue: string | (() => string) | null
): [string, ValueSetter] {
  // @ts-ignore
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const value = window.localStorage.getItem(keyName)
      if (value) {
        return value
      } else {
        if (typeof defaultValue === 'function') {
          const defaultValueValue = defaultValue()
          window.localStorage.setItem(keyName, defaultValueValue)
          return defaultValueValue
        } else {
          window.localStorage.setItem(keyName, defaultValue as string)
          return defaultValue
        }
      }
    } catch (err) {
      return defaultValue
    }
  })

  const setValue: ValueSetter = newValue => {
    try {
      window.localStorage.setItem(keyName, newValue)
    } catch (err) {}
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
