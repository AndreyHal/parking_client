import styled from "styled-components";

const Container = styled.div`
  .cancel-btn {
    text-align: center;
    font-size: var(--small_font);
    color: var(--silver);
    text-transform: uppercase;
    margin: 15px;
    cursor: pointer;
  }
  @media(max-width: 380px) {
    .cancel-btn {
      font-size: var(--font_em);
    }
  }
`;

export {Container};