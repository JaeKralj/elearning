import { createContext, useContext, useEffect, useState } from 'react'

// Define the type for the authenticated user
interface AuthUser {
  uid: string
}

interface UserContextProps {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// Create the User Context
const UserContext = createContext<UserContextProps | null>(null)

// Custom hook to use the User Context
export const useUser = () => useContext(UserContext)

// User Context Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('authId')
    if (token) {
      // You may want to verify the token on the server-side for extra security.
      setUser({ uid: token })
    }

    return
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
