import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  .header {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
    h2 {
      font-size: 30px;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  .decs {
    
  }
  .address {
    font-weight: bold;
  }
  .map {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    //filter: invert(1);
    border-radius: 5px;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export {Container};