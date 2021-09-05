import React from 'react';
import {Container} from "./styles";

const Textarea = ({...props}) => {

  return(
    <Container className={props.className}>
      <span className={props.value || props.defaultValue ? 'top' : ''}>{props.placeholder}</span>
      <textarea rows={props.rows}
                cols={props.cols}
                // placeholder={props.placeholder}
                style={props.style}
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
      />
    </Container>
  )
};

export default Textarea;