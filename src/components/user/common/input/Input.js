import React, {useState} from 'react';
import {Container} from "./styles";
import show_pass_icon from '../../../../img/show_pass.svg';

const Input = ({...props}) => {
  const [show_pass, setShowPass] = useState(false);

  return(
    <Container className={props.className}>
      <span className={props.value || props.defaultValue ? 'top' : ''}>{props.placeholder}</span>
      {
        props.type === 'password' && <img src={show_pass_icon} onClick={() => setShowPass(!show_pass)} alt=""/>
      }
      <input type={show_pass ? 'text' : props.type}
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

export default Input;