import styled from "styled-components";
import Github from '@/assets/images/Logo.svg'

export const Logo = styled(Github)`
  margin-bottom: 40px;
  & path {
    fill: #FFCE00;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  & label {
    width: 100%;
    height: 56px;
    background-color: #fff;
    margin-bottom: 20px;
    position: relative;
    border-radius: 12px;
    text-align: right;
    padding-right: 20px;
    line-height: 56px;
    overflow: hidden;
  }
  & input {
    background: transparent;
    position: absolute;
    left: 0;
    color: #222;
    width: 100%;
    height: 56px;
    padding-left: 16px;
    border: none;
    font-size: 1.2rem;
    margin-bottom: 20px;
    z-index: 1;
    :focus {
      outline: none;
    }
    ::placeholder {
      position: absolute;
      line-height: 56px;
      color: #535353;
      font-size: 1.2rem;
    }
  }
  & button {
    width: 100%;
    height: 56px;
    border: 0;
    background: #FFCE00;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 12px;
    & span {
      padding-left: 8px;
    }
  }
`

export const Error = styled.div`
  position: relative;
  color: red;
  opacity: 1;
  visibility: ${({ error }) => (error === true  ? 'hidden' : 'visible')};
  top:  ${({ error }) => (error === true  ? '14px' : '0')};
  transition: 0.1s ease-out;
  font-size: 14px;
`

