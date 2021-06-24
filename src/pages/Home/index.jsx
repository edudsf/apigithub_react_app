import * as c from './style'
import * as ch from '@/components/Profile/Header/style'
import { H1, P, Span } from '@/styles/global';
import Description from '@/components/Profile/Description'
import Perfil from '@/components/Profile/Perfil'
import { usePath } from '@/hooks/use_path'
import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth';
import { GettersContext } from '@/contexts/getters';
import Loading from '@/components/Loading'

const Home = () => {

  const { logout, user, setUser } = useContext(AuthContext)
  const { getRepos, getFollowers, loading, setLoading } = useContext(GettersContext)

  const go = usePath()

  const execRepos = () => {
    setLoading(true)
    getRepos(user.login, () => {
      go.repositories()
      setLoading(false)
    })
  }

  const execFllowers = () => {
    setLoading(true)
    getFollowers(user.login, () => {
      go.followers()
      setLoading(false)
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
              <Span>{user.login}</Span>
              <button onClick={logout}><span>Sair</span></button>
            </div>
            <img src={user.avatar_url} alt="" title="" />
          </ch.Header>
          <Perfil user={user} />
          <c.InfoMenu>
            <li><Span onClick={execFllowers}>{user.followers}</Span><Span>Seguidores</Span></li>
            <li><Span>{user.following}</Span><Span>Seguindo</Span></li>
            <li><Span onClick={execRepos}>{user.public_repos}</Span><Span>Repos</Span></li>
          </c.InfoMenu>
          <Description user={user} />
        </c.Container>
      }
    </>
  )
}

export default Home