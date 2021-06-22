import * as c from './style'
import { H1, P, Span } from '@/styles/global';

const Description = (props) => {

  const user = props.user

  return (
    <c.Description>
      <H1>BIO</H1>
      <P>{user.bio}</P>
    </c.Description>
  )
}

export default Description