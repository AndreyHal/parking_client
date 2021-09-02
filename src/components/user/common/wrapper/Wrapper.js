import React from 'react';
import {Container} from "./styles";

const Wrapper = ({...props}) => {
  return(
    <Container>
      {props.children}
    </Container>
  )
};

export default Wrapper;