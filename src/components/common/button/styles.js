import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: max-content;
  max-width: 100%;
  margin: 50px auto;
  padding: 15px 40px;
  box-sizing: border-box;
  border-radius: var(--radius);
  font-size: var(--middle_font);
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(to right, var(--yellow), var(--orange));
  cursor: pointer;
  z-index: 1;
  span {
    background: linear-gradient(to right, var(--yellow), var(--orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background: var(--black);
    border-radius: var(--radius);
    z-index: -1;
  }
  &:hover {
    //background: #bbb;
  }
  @media(max-width: 380px) {
    font-size: var(--font_em);
  }
`;

export {Container};