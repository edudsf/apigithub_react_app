import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search, Home, Repositories, Followers } from '@/pages'

const PrivateRoute = ({ component: Compoent, ...res}) => {
  <Route
    {...res}
    render={props => 
      isAuthenticated() ? (
        <Compoent {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location }}} />
      )
    }
  />
}

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/repositories' component={Repositories} />
      <Route exact path='/followers' component={Followers} />
    </Switch>
  </BrowserRouter>
)

export default Router