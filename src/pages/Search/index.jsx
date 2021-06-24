import { Logo, Container, Error } from './style'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/auth'
import { usePath } from '@/hooks/use_path'
import Loading from '@/components/Loading'
import { validator } from '@/utils/validator'

const Search = () => {

  const [error, setError] = useState({
    msg: '',
    op: 1,
    right: true
  })

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
    setError({
      ...error,
      right: true,
    })
  }

  const handleSubmit = () => {
    if(validator(input)){
      setError({  
        ...error,
        right: false,
        msg: "Campo obrigatório!"
      })

      return null
    }
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
          <label>
            <input onChange={handleInput} type="text" placeholder="Usuário" />
            <Error error={error.right}>{error.msg}</Error>
          </label>
          <button onClick={handleSubmit}>ENTRAR<span>&#129122;</span></button>
        </>
      }
    </Container>
  )
}

export default Search