import styled from "styled-components";

const Container = styled.div`
  a {
    display: inline-block;
    font-size: var(--middle_font);
    color: var(--gold);
    margin: 15px;
    text-decoration: none;
  }
  @media(max-width: 380px) {
    a {
      font-size: var(--small_font);
    }
  }
`;

export {Container};