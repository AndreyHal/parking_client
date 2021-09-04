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
    .header {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      grid-gap: 10px;
      color: var(--gold);
      h2 {
        margin: 0;
        font-size: var(--middle_font);
        font-weight: var(--font_weight_regular);
        text-transform: uppercase;
      }
      p {
        margin: 0;
        font-size: var(--small_font);
      }
    }
    & > p {
      margin: 25px 0 5px;
      font-weight: var(--font_weight_light);
    }
    .footer {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      grid-gap: 5px;
      p {
        margin: 0;
        font-weight: var(--font_weight_light);
      }
      img {
        width: 15px;
      }
    }
  }
  @media(max-width: 380px) {
    grid-template-columns: 70px auto;
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
      .footer {
        img {
          width: 13px;
        }
      }
    }
  }
`;

export {Container};