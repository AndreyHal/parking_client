import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  .period {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    grid-gap: 10px;
  }
  .address {
    font-weight: bold;
  }
  .number {
    span {
      font-weight: bold;
    }
  }
`;

export {Container};