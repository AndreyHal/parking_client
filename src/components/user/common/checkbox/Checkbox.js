import React from 'react';
import {Container} from "./styles";

const Checkbox = ({checked, onChange, label}) => {
  return(
    <Container>
      <input type="checkbox"
             checked={checked}
             onChange={onChange}
      />
      <span>{label}</span>
    </Container>
  )
};

export default Checkbox;