import styled from "styled-components";

const Container = styled.div`
  .checkboxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 25px;
  }
  .cancel-btn {
    text-align: center;
    font-size: var(--small_font);
    color: var(--silver);
    text-transform: uppercase;
    margin: 15px;
    cursor: pointer;
  }
  @media(max-width: 430px) {
    .checkboxes {
      grid-template-columns: 1fr;
      label {
        margin-top: 5px;
        input {
          width: 18px;
          height: 18px;
          &:before {
            width: 5px;
            height: 9px;
            transform: translate(-50%, -65%) rotateZ(45deg);
          }
        }
        span {
          font-size: var(--middle_font);
        }
      }
    }
  }
  @media(max-width: 380px) {
    .checkboxes {
      label {
        input {
          width: 15px;
          height: 15px;
          &:before {
            width: 4px;
            height: 7px;
            transform: translate(-55%, -65%) rotateZ(45deg);
          }
        }
        span {
          font-size: var(--small_font);
        }
      }
    }
    .cancel-btn {
      font-size: var(--font_em);
    }
  }
`;

export {Container};