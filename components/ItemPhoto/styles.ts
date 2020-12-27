import styled from "styled-components"
const Description = styled.div`
  visibility: hidden;
  display: grid;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  justify-items: center;
  align-content: space-evenly;
  width: 100%;
`
const RootElement = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3vw;
  display: flex;
  justify-content: center;
  &:hover {
    a {
      &::before {
        opacity: 0.7;
      }
    }
    ${Description} {
      transition: 0.5s;
      visibility: visible;
    }
  }
  & > a {
    &::before {
      transition: 0.5s;
      content: "";
      height: 99.5%;
      width: 100%;
      position: absolute;
      background: #000000;
      opacity: 0;
      left: 0;
      top: 0;
    }
  }
`
const AuthorInfo = styled.div`
  pointer-events: none;
  line-height: 0.2;
  text-align: center;
  color: #ffffff;
`
const ActionBlock = styled.div`
  cursor: pointer;
  display: flex;
  width: 150px;
  justify-content: space-between;
  & > img {
    &:hover {
      transition: 0.5s;
      transform: scale(2);
    }
  }
`
export {RootElement, Description, AuthorInfo, ActionBlock}