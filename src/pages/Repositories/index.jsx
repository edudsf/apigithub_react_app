import * as c from './style'
import { H1, P, Span } from '@/styles/global';
import SimpleHeader from '@/components/Simple_Header/index'
import { useContext, useState } from 'react';
import { repos } from '@/services/api'
import { GettersContext } from '@/contexts/getters';
import { usePath } from '@/hooks/use_path';
import { stringLimit } from "@/utils/string_limit"

const Repositories = () => {

  const { repos } = useContext(GettersContext)

  return (
    <c.Container>
    {console.log(repos)}
      <SimpleHeader title="repositórios" count={repos.data.length} />
      {
        repos.data.map(item => {
          return (
            <c.Content>
              <H1>{stringLimit(item.name)}</H1>
              <P>{item.description}</P>
              <div>
                <Span><c.Star /></Span><Span>{item.stargazers_count}</Span>
                <div></div>
                <Span><c.Unlock /></Span><Span><c.Lock /></Span>
              </div>
            </c.Content>)
        })
      }

    </c.Container>
  )
}

export default Repositories