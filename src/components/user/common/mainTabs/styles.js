import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-around;
  grid-gap: 10px;
  width: 100%;
  bottom: 0;
  padding: 10px;
  background: #888;
  div {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    background: #aaa;
    cursor: pointer;
    &.selected {
      background: #fff;
    }
  }
`;

export {Container};