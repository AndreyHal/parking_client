import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 60px;
  .creating {
    position: sticky;
    display: inline-block;
    top: 10px;
    left: 50%;
    width: 130px;
    padding: 5px;
    margin-top: 15px;
    text-align: center;
    color: var(--silver);
    font-size: var(--small_font);
    border: 1px solid var(--silver);
    border-radius: 20px;
    transform: translateX(-50%);
    background: var(--black);
  }
  @media(max-width: 380px) {
    .creating {
      font-size: var(--font_em);
    }
  }
`;

export {Container};