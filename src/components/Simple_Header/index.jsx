import * as c from './style'
import { H1, P, Span } from '@/styles/global';

const SimpleHeader = () => {
  return (
    <c.Header>
      <button>&#129128;</button>
      <Span>10 repositórios</Span>
    </c.Header>
  )
}

export default SimpleHeader