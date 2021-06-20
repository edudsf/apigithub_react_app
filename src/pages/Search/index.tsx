import { Logo, Container } from './style'

const Search = () => {
  return (
    <Container>
      <Logo />
      <input type="text" placeholder="Usuário" />
      <button>ENTRAR<span>&#129122;</span></button>
    </Container>
  )
}

export default Search