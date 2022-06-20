import { createContext, useState } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const { Provider } = UserContext
  const [user, setUser] = useState()

  const value = {
    user,
    setUser,
  }

  return <Provider value={value}>{children}</Provider>
}
