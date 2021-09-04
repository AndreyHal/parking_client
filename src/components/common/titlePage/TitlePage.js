import React from 'react';
import {Container} from "./styles";

const TitlePage = ({...props}) => {
  return(
    <Container>
      {props.children}
    </Container>
  )
};

export default TitlePage;