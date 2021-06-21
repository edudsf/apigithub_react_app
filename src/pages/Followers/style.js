import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-self: start;
`

export const Content = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #484848;
  & > :first-child {
    padding-left: 30px;
  }
  & > :last-child {
    padding-right: 30px;
    font-size: 20px;
  }
  & img {
    width: 64px;
    height: 64px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  & h1 {
    display: block;
  }
  & b {
    flex-grow: 1;
  }
  & :nth-child(3n) {
    margin-left: 20px;
  }
`