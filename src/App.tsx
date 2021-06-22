import { MainContainer } from '@/styles/global'
import GlobalState from './contexts/global'
import Router from './router/routes'

function App() {
  return (
    <MainContainer>
      <GlobalState>
        <Router />
      </GlobalState>
    </MainContainer>
  )
}

export default App