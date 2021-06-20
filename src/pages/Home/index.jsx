import * as c from './style'
import { H1, P, Span } from '@/styles/global';

const Home = () => {
  return (
    <c.Container>
      <c.Header>
        <div>
          <Span>#anilton.veiga</Span>
          <button>Sair<span>*</span></button>
        </div>
        <img src="https://avatars.githubusercontent.com/u/2703782?v=4" alt="" title="" />
      </c.Header>
      <c.Perfil>
        <H1>ANILTON VEIGA</H1>
        <P>anilton.veigaa@gmail.com</P>
        <P>Itaí/SP</P>
      </c.Perfil>
      <c.InfoMenu>
        <li><Span>32</Span><Span>Seguidores</Span></li>
        <li><Span>32</Span><Span>Seguindo</Span></li>
        <li><Span>32</Span><Span>Repos</Span></li>
      </c.InfoMenu>
      <c.Description>
        <H1>BIO</H1>
        <P>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</P>
      </c.Description>
    </c.Container>
  )
}

export default Home