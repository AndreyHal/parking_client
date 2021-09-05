import styled from "styled-components";

const Container = styled.div`
  .avatar {
    width: 50%;
    margin: 0 auto;
    label {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: var(--radius);
      }
    }
  }
  .cancel-btn {
    text-align: center;
    font-size: var(--small_font);
    color: var(--silver);
    text-transform: uppercase;
    margin: 15px;
    cursor: pointer;
  }
  @media(max-width: 380px) {
    .avatar {
      margin-top: 20px;
    }
    .cancel-btn {
      font-size: var(--font_em);
    }
  }
`;

export {Container};