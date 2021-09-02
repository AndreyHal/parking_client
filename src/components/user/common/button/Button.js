import React from 'react';
import {Container} from "./styles";

const Button = ({...props}) => {
  return(
    <Container onClick={props.action}>
        <span>{props.children}</span>
    </Container>
  )
};
export default Button;