import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(4, 30px);
  justify-content: center;
  grid-gap: 60px;
  width: 100vw;
  left: 0;
  bottom: 0;
  padding: 20px;
  box-sizing: border-box;
  background: var(--black_light);
  z-index: 1;
  div {
    position: relative;
    height: 30px;
    padding-top: 7px;
    text-align: center;
    cursor: pointer;
    &.selected {
      padding-bottom: 7px;
      padding-top: 0;
      &:before {
        position: absolute;
        content: '';
        width: 80%;
        height: 1px;
        left: 50%;
        bottom: -4px;
        box-shadow: 0 -4px 3px var(--gold);
        transform: translateX(-50%);
        background: transparent;
      }
    }
    img {
      width: 100%;
    }
  }
  @media(max-width: 380px) {
    grid-template-columns: repeat(4, 25px);
    grid-gap: 50px;
    div {
      height: 25px;
    }
  }
`;

export {Container};