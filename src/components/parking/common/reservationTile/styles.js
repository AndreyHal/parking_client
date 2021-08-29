import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 10px;
  width: 90%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  .photo {
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .info {
    font-size: 16px;
    .header {
      font-weight: bold;
      h2 {
        margin: 0;
        font-size: 22px;
      }
    }
    & > p {
      margin: 15px 0 5px;
    }
    .footer {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 5px;
      p {
        margin: 0;
      }
    }
  }
`;

export {Container};