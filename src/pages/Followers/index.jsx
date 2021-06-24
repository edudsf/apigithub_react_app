import * as c from './style'
import { H1, P, Span } from '@/styles/global';
import SimpleHeader from '@/components/Simple_Header/index'
import { useContext, useState } from 'react';
import { GettersContext } from '@/contexts/getters';
import Loading from '@/components/Loading'
import { login } from '@/services/api'
import { AuthContext } from '@/contexts/auth';
import { usePath } from '@/hooks/use_path';

const Followers = () => {

  const go = usePath()
  const [ follower, setFollower ] = useState()
  const { follow, loading, setLoading } = useContext(GettersContext)
  const { setUser, user } = useContext(AuthContext)

  const getFollower = (name) => {
    console.log(name)
    setLoading(true)
    login(name).then((res) => {
      setLoading(false)
      go.follower(res.data)
    })
  }

  return (
    <>
    {
      loading
        ?
        <Loading />
        :
        <c.Container>
          <SimpleHeader title="seguidores" count={follow.data.length} />
          {follow.data.map(item => {
            return (
            <c.Content onClick={() => getFollower(item.login)}>
              <H1></H1>
              <img src={item.avatar_url} alt="" title="" />
              <Span>{item.login}</Span>
              <b></b>
              <Span>&#129130;</Span>
            </c.Content>
          )

          })}
        </c.Container>
    }
    </>
  )
}

export default Followers