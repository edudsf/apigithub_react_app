import * as c from './style'
import * as ch from '@/components/Profile/Header/style'
import { H1, P, Span } from '@/styles/global';
import Description from '@/components/Profile/Description'
import Perfil from '@/components/Profile/Perfil'
import { usePath } from '@/hooks/use_path'
import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth';
import { useLocation } from 'react-router-dom';
import Loading from '@/components/Loading'

const Follower = () => {

  const go = usePath()
  const location = useLocation()
  const { makeLogin, loading, setLoading } = useContext(AuthContext)
  const user = location.state
  console.log(user);

  const save = () => {
    setLoading(true)
    makeLogin(user.login, (res) => {
      setLoading(false)
      go.home()
      console.log(res)
    })
  }

  return (
    <>
      {loading
        ?
        <Loading />
        :
        <c.Container>
          <ch.Header>
            <div>
              <button onClick={() => go.back()}>&#129128;</button>
              <button onClick={save}>Salvar</button>
            </div>
            <img src={user.avatar_url} alt="" title="" />
          </ch.Header>
          <Perfil user={user} />
          <c.InfoMenu>
            <li><Span>{user.followers}</Span><Span>Seguidores</Span></li>
            <li><Span>{user.following}</Span><Span>Seguindo</Span></li>
            <li><Span>{user.public_repos}</Span><Span>Repos</Span></li>
          </c.InfoMenu>
          <Description user={user} />
        </c.Container>
      }
    </>
  )
}

export default Follower