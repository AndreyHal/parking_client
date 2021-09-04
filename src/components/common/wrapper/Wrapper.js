import React from 'react';
import {Container} from "./styles";

const Wrapper = ({...props}) => {
  return(
    <Container wide={props.wide}>
      {props.children}
    </Container>
  )
};

export default Wrapper;