import styled from "styled-components";

const Container = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 35px;
    left: 10px;
    pointer-events: none;
    font-size: var(--middle_font);
    color: var(--silver);
    transition: 0.5s;
    &.top {
      top: 20px;
      left: 10px;
      font-size: var(--small_small_font);
      color: var(--gold);
      padding: 0 5px;
      background: var(--black);
    }
  }
  textarea {
    outline: none;
    resize: none;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin-top: 25px;
    border: 1px solid var(--silver);
    border-radius: var(--radius);
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