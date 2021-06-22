import * as c from './style'
import { H1, P, Span } from '@/styles/global';

const Perfil = (props) => {

  const user = props.user

  return (
    <c.Perfil>
      <H1>{user.name}</H1>
      <P>{user.email}</P>
      <P>{user.location}</P>
    </c.Perfil>
  )
}

export default Perfil