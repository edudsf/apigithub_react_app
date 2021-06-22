import { useHistory } from 'react-router-dom'

export const usePath = () => {
  const history = useHistory()
  const state = history?.location?.state

  const home = () => history.push('/home')
  const repositories = () => history.push('/repositories') 
  const followers = () => history.push('/followers') 
  const follower = state => history.push({pathname: '/follower', state}) 
  const back = () => history.goBack()
  
  return {
    home,
    repositories,
    followers,
    follower,
    back,
    state,
  }
}