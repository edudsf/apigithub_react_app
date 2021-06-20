import styled from "styled-components";
import Github from '@/assets/images/Logo.svg'

export const Logo = styled(Github)`
  margin-bottom: 40px;
  & path {
    fill: #FFCE00;
  }
`;

export const Container = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 20px;
  & input {
    color: #222;
    width: 100%;
    height: 56px;
    padding-left: 16px;
    border: none;
    font-size: 1.2rem;
    margin-bottom: 20px;
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
    & span {
      padding-left: 8px;
    }
  }

  & button, input {
    border-radius: 12px;
  }
`