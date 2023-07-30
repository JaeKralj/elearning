import useLocalStorage from '@/hooks/useLocalStorage'
import { createContext, useContext } from 'react'

// Define the type for the authenticated user
interface AuthUser {
  uid: string
}

interface UserContextProps {
  user: AuthUser | null
  setUser: (newValue: string) => void
}

// Create the User Context
const UserContext = createContext<UserContextProps | null>(null)

// Custom hook to use the User Context
export const useUser = () => useContext(UserContext)

// User Context Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // const [user, setUser] = useState<AuthUser | null>(null)
  const [localStorageUser, setUser] = useLocalStorage('authId', null)
  // useEffect(() => {
  //   const token = localStorage.getItem('authId')
  //   if (token) {
  //     // You may want to verify the token on the server-side for extra security.
  //     setUser({ uid: token })
  //   }

  //   return
  // }, [])

  let user: AuthUser | null = null
  if (localStorageUser) {
    user = { uid: JSON.parse(localStorageUser) }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
