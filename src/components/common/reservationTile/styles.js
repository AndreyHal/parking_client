import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 10px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid var(--silver);
  border-radius: var(--radius);
  &.opened {
    grid-template-columns: 150px auto;
    .addition {
      display: block;
    }
  }
  .photo {
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .info {
    font-size: var(--small_font);
    color: var(--silver);
    font-weight: var(--font_weight_light);
    .header {
      h2 {
        margin: 0;
        font-size: var(--middle_font);
        font-weight: var(--font_weight_regular);
        color: var(--gold);
        text-transform: uppercase;
      }
    }
    & > p {
      margin: 25px 0 5px;
    }
  }
  .addition {
    display: none;
    margin-top: 5px;
    border-top: 1px solid var(--silver);
    p {
      margin: 5px 0 0;
    }
  }
  @media(max-width: 380px) {
    grid-template-columns: 70px auto;
    &.opened {
      grid-template-columns: 125px auto;
    }
    .info {
      font-size: var(--font_em);
      .header {
        h2 {
          font-size: var(--small_font);
        }
        p {
          font-size: var(--small_small_font);
        }
      }
    }
  }
`;

export {Container};