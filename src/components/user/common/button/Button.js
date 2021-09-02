import React from 'react';
import {Container} from "./styles";

const Button = ({...props}) => {
  return(
    <Container onClick={props.action}>
      {/*<div className="border">*/}

      {/*</div>*/}
      {/*<div>*/}
        <span>{props.children}</span>
      {/*</div>*/}
    </Container>
  )
};
export default Button;