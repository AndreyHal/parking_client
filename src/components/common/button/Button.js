import React from 'react';
import {Container} from "./styles";

const Button = ({...props}) => {
  return(
    <Container onClick={props.action} style={props.style} className='gradient-button'>
        <span>{props.children}</span>
    </Container>
  )
};
export default Button;