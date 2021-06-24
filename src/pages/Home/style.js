import styled from 'styled-components';
import logout from '@/assets/images/logout.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
  & > :nth-child(2n), > :last-child {
    & > * {
      padding: 0 30px 0 30px;
    }
  }
`

export const InfoMenu = styled.ul`
  background: #3E3E3E;
  text-align: center;
  padding: 15px 0;
  & li {
    width: 33.33%;
    text-align: center;
    float: left;
    &:not(:nth-of-type(2)){
      cursor: pointer;
    }
    & span {
      display: block;
    }
    & > :first-child {
      font-size: 40px;
      font-weight: bold;
      line-height: 49px;
    }
  }
`

export const Logout = styled(logout)`
  fill: #fff;
  display: contents;
`