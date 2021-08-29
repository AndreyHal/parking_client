import styled from "styled-components";

const Container = styled.div`
  p {
    text-align: center;
    font-size: 24px;
    a, span {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export {Container};