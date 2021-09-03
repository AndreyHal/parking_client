import styled from "styled-components";

const Container = styled.div`
  font-size: var(--big_font);
  color: var(--gold);
  margin: 0 0 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  @media(max-width: 380px) {
    font-size: var(--middle_font);
    margin: 0;
  }
`;

export {Container};