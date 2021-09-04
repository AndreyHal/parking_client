import styled from "styled-components";

const Container = styled.div`
  position: relative;
  span {
    position: absolute;
    bottom: 10px;
    left: 15px;
    pointer-events: none;
    font-size: var(--middle_font);
    color: var(--silver);
    transition: 0.5s;
    &.top {
      bottom: 30px;
      font-size: var(--small_small_font);
      color: var(--gold);
    }
  }
  img {
    position: absolute;
    bottom: 10px;
    right: 15px;
    width: 15px;
    cursor: pointer;
  }
  input {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    margin-top: 25px;
    border: none;
    border-bottom: 1px solid var(--silver);
    font-size: var(--middle_font);
    color: var(--silver);
    background: transparent;
    &::placeholder {
      color: var(--silver);
    }
  }
  @media(max-width: 380px) {
    span:not(span.top), input {
      font-size: var(--font_em);
    }
  }
`;

export {Container};