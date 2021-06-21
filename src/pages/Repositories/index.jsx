import * as c from './style'
import { H1, P, Span } from '@/styles/global';
import SimpleHeader from '@/components/Simple_Header/index'

const Repositories = () => {
  return (
    <c.Container>
      <SimpleHeader />
      <c.Content>
        <H1>brasiliapp-react-native</H1>
        <P>Repository for centralization of the BrasiliApp mobile project</P>
        <div>
          <Span><c.Star /></Span><Span>32</Span>
          <div></div>
          <Span><c.Unlock /></Span><Span><c.Lock /></Span>
        </div>
      </c.Content>
      <c.Content>
        <H1>brasiliapp-react-native</H1>
        <P>Repository for centralization of the BrasiliApp mobile project</P>
        <div>
          <Span><c.Star /></Span><Span>32</Span>
          <div></div>
          <Span><c.Unlock /></Span><Span><c.Lock /></Span>
        </div>
      </c.Content>
      <c.Content>
        <H1>brasiliapp-react-native</H1>
        <P>Repository for centralization of the BrasiliApp mobile project</P>
        <div>
          <Span><c.Star /></Span><Span>32</Span>
          <div></div>
          <Span><c.Unlock /></Span><Span><c.Lock /></Span>
        </div>
      </c.Content>
    </c.Container>
  )
}

export default Repositories