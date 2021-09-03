import styled from "styled-components";

const Container = styled.div`
  position: relative;
  input {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    font-size: var(--middle_font);
    color: var(--silver);
    padding: 15px 45px 15px 15px;
    border: 1px solid var(--silver);
    border-radius: var(--radius);
    background: var(--black);
    &::placeholder {
      font-size: var(--middle_font);
      color: var(--silver);
    }
  }
  img {
    position: absolute;
    top: 50%;
    right: 15px;
    width: 25px;
    transform: translateY(-50%);
  }
`;

export {Container};