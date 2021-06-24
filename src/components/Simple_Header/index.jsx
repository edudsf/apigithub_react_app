import * as c from './style'
import { H1, P, Span } from '@/styles/global';
import { usePath } from '@/hooks/use_path';

const SimpleHeader = (props) => {

  const go = usePath()

  return (
    <c.Header>
      <button onClick={go.back}>&#129128;</button>
      <Span>{props.count} {props.title}</Span>
    </c.Header>
  )
}

export default SimpleHeader