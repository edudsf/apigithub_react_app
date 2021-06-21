import styled from 'styled-components'
import unlock from '@/assets/images/unlock.svg'
import lock from '@/assets/images/lock.svg'
import star from '@/assets/images/star.svg'

export const Container = styled.div`
  width: 100%;
  align-self: start;
`
export const Content = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #484848;
  & h1 {
    font-size: 20px;
  }
  & > * {
    padding: 0 30px 0 30px;
  }
  & p {
    font-size: 15px;
    margin: 0 0 10px 0;
  }
  & div {
    display: flex;
    align-items: center;
    & > :nth-child(2), > :last-child {
      margin-left: 8px;
    }
    & div {
      flex-grow: 1;
    }
  }
`

export const Unlock = styled(unlock)`
  stroke: #63BF1F;
`

export const Lock = styled(lock)`
  stroke: #CC042A;
`

export const Star = styled(star)`
  fill: #FFCE00;
`