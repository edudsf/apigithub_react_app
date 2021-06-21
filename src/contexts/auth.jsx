import {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider= () => {
  
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(false)

  const logout = () => {
    setUser(false)
    setIsLogged(false)
  }

  const login = user => {
    setUser(user || true)
    setIsLogged(true)
  }

  return {user, isLogged, login, logout}
}