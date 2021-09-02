import styled from "styled-components";

const Container = styled.div`
  .code {
    display: grid;
    grid-template-columns: repeat(4, 45px);
    justify-content: center;
    grid-gap: 15px;
    height: 53px;
    margin-top: 100px;
    .number {
      padding: 10px;
      text-align: center;
      color: var(--silver);
      font-size: var(--big_font);
      border-bottom: 1px solid var(--silver);
    }
  }
  @media(max-width: 380px) {
    .code {
      grid-template-columns: repeat(4, 35px);
      height: 42px;
      .number {
        font-size: var(--middle_font);
      }
    }
  }
`;

export {Container};