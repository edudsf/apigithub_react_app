import { Logo, Container } from './style'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/auth'
import { usePath } from '@/hooks/use_path'
import Loading from '@/components/Loading'

const Search = () => {

  const [input, setInput] = useState()
  const { makeLogin, isLogged, loading, setLoading } = useContext(AuthContext)
  const data = JSON.parse(localStorage.getItem('github_name'));
  const go = usePath()

  useEffect(() => {
    if (data) {
      go.home()
    }
  }, [isLogged])

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    setLoading(true)
    makeLogin(input, (res) => {
      setLoading(false)
      go.home()
      console.log(res)
    })
  }

  return (
    <Container>
      {loading
        ?
        <Loading />
        :
        <>
          <Logo />
          <input onChange={handleInput} type="text" placeholder="Usuário" />
          <button onClick={handleSubmit}>ENTRAR<span>&#129122;</span></button>
        </>
      }
    </Container>
  )
}

export default Search