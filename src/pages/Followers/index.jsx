import * as c from './style'
import { H1, P, Span } from '@/styles/global';
import SimpleHeader from '@/components/Simple_Header/index'

const Followers = () => {
  return (
    <c.Container>
      <SimpleHeader />
      <c.Content>
        <H1></H1>
        <img src="https://avatars.githubusercontent.com/u/2703782?v=4" alt="" title="" />
        <Span>#aniltonveiga</Span>
        <b></b>
        <Span>&#129130;</Span>
      </c.Content>
      <c.Content>
        <H1></H1>
        <img src="https://avatars.githubusercontent.com/u/2703782?v=4" alt="" title="" />
        <Span>#aniltonveiga</Span>
        <b></b>
        <Span>&#129130;</Span>
      </c.Content>
      <c.Content>
        <H1></H1>
        <img src="https://avatars.githubusercontent.com/u/2703782?v=4" alt="" title="" />
        <Span>#aniltonveiga</Span>
        <b></b>
        <Span>&#129130;</Span>
      </c.Content>
    </c.Container>
  )
}

export default Followers