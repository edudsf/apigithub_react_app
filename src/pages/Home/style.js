import styled from 'styled-components';

export const Perfil = styled.div`
  padding: 100px 0 40px 0;
`

export const Description = styled.div`
  padding: 40px 0 0 0;
  & p {
    margin-top: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
  & ${Perfil}, ${Description} {
    & > * {
      padding: 0 30px 0 30px;
    }
  }
`

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

export const InfoMenu = styled.ul`
  background: #3E3E3E;
  text-align: center;
  padding: 15px 0;
  & li {
    width: 33.33%;
    text-align: center;
    float: left;
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