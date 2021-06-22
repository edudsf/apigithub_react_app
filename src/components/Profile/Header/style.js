import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  min-height: 126px;
  background: #1F1F1F;
  text-align: center;
  position: relative;
  & div > span:first-of-type {
    font-weight: 500;
  }

  & div {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    & button {
      border: 0;
      color: #fff;
      background-color: inherit;
      font-size: 17px;
    }
  }
  & img {
    margin: 0 auto;
    position: absolute;
    bottom: -57px;
    left: 50%;
    margin-left: -57px;
    border-radius: 50%;
    width: 115px;
    border: 3px solid #fff;
  }
`