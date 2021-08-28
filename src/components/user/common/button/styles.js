import styled from "styled-components";

const Container = styled.div`
  margin: 30px auto;
  padding: 10px;
  width: 90%;
  max-width: 400px;
  box-sizing: border-box;
  background: #ccc;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #bbb;
  }
`;

export {Container};