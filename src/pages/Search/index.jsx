import { Logo, Container } from './style'
//import { login } from '@/services/api'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/auth'

const Search = () => {

  const [input, setInput] = useState()
  const auth = useContext(AuthContext)

  const handleInput = (event) => {
    
  }

  return (
    <Container>
      <Logo />
      <input type="text" placeholder="Usuário" />
      <button>ENTRAR<span>&#129122;</span></button>
    </Container>
  )
}

export default Search