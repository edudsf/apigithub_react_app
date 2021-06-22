import { createContext, useState } from 'react'
import { login } from '@/services/api'

const defaultValues = {
  isLogged: false,
  user: {},
  login: () => { },
  logout: () => { },
}

export const AuthContext = createContext(defaultValues)

export const AuthProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false) 
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(false)

  const logout = () => {
    setUser(false)
    setIsLogged(false)
    localStorage.removeItem('github_name')
  }

  const makeLogin = (data, callback) => {
    login(data).then(res => {
      if(res.status !== 200){
        setUser(false)
        return null
      }else{
        setUser(res.data)
        callback(res.status)
        localStorage.setItem('github_name', JSON.stringify(res.data))
        setIsLogged(true)
      }
    })
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isLogged, setIsLogged, makeLogin, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}