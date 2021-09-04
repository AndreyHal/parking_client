import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: ${props => props.wide ? '30px' : '30px 45px'};
  box-sizing: border-box;
  background: var(--black);
`;

export {Container};