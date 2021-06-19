import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search } from '@/pages'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search} />
    </Switch>
  </BrowserRouter>
)

export default Router