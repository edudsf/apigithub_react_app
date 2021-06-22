import { createContext, useState } from 'react'
import { repositories, followers } from '@/services/api'

export const GettersContext = createContext()

export const GettersProvider = ({ children }) => {
  
  const [ repos, setRepos ] = useState()
  const [ follow, setFollow ] = useState()
  const [loading, setLoading] = useState(false)

  const getRepos = (user_login, callback) => {
    repositories(user_login).then((res) => {
      setRepos(res)
      callback()
      console.log(repos)
    })
  }

  const getFollowers = (user_login, callback) => {
    followers(user_login).then((res) => {
      setFollow(res)
      callback()
      console.log(follow)
    })
  }
  
  
  return (
    <GettersContext.Provider value={{ repos, follow, getRepos, getFollowers, loading, setLoading }}>
      {children}
    </GettersContext.Provider>
  )
}

