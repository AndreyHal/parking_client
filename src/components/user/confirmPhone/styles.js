import styled from "styled-components";

const Container = styled.div`
  .code {
    display: grid;
    grid-template-columns: repeat(4, 45px);
    justify-content: center;
    grid-gap: 15px;
    height: 53px;
    margin-top: 100px;
    &.error {
      animation: anim 0.2s linear;
      .number {
        border-bottom-color: var(--red);
      }
    }
    .number {
      padding: 10px;
      text-align: center;
      color: var(--silver);
      font-size: var(--big_font);
      border-bottom: 1px solid var(--silver);
    }
  }
  .keyboard {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(3, 20px);
    justify-content: center;
    grid-gap: 40px 80px;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
    div {
      font-size: var(--big_font);
      color: var(--silver);
      text-align: center;
      img {
        width: 130%;
        transform: translateX(-5px);
      }
    }
  }
  @keyframes anim {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(20px);
    }
    50% {
      transform: translateX(-20px);
    }
    75% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
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
    .keyboard {
      grid-gap: 40px 60px;
      div {
        font-size: var(--middle_font);
        img {
          width: 100%;
          transform: none;
        }
      }
    }
  }
`;

export {Container};