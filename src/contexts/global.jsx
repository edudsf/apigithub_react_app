import { AuthProvider } from './auth'
import { GettersProvider } from './getters'

const GlobalState = ({ children }) => (
  <AuthProvider>
    <GettersProvider>
      {children}
    </GettersProvider>
  </AuthProvider>
)

export default GlobalState