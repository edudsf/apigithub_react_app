import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search, Home, Repositories } from '@/pages'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/repositories' component={Repositories} />
    </Switch>
  </BrowserRouter>
)

export default Router