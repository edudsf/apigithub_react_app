import styled from 'styled-components'

export const Header = styled.div`
  position: relative;
  text-align: center;
  height: 68px;
  background: #1F1F1F;
  line-height: 68px;
  & > :first-child {
    line-height: 68px;
    position: absolute;
    left: 15px;
  }
  & button {
    cursor: pointer;
    font-size: 25px;
    background: inherit;
    color: #fff;
    border: 0;
  }
`