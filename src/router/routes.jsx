import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Search, Home, Repositories, Followers, Follower } from '@/pages'
import { AuthContext } from '@/contexts/auth'

const Router = () => {

  const { isLogged, setIsLogged, setUser } = useContext(AuthContext)
  const data = JSON.parse(localStorage.getItem('github_name'));

  useEffect(() => {
    if (data) {
      setIsLogged(true)
      setUser(data)
    }
  }, [])


  const PrivateRoute = ({ component: Component, ...res }) => (
    <Route
      {...res}
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  )

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Search} />
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/repositories' component={Repositories} />
        <PrivateRoute exact path='/followers' component={Followers} />
        <PrivateRoute exact path='/follower' component={Follower} /> 
      </Switch>
    </BrowserRouter>
  )

}

export default Router