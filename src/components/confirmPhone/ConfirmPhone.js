import React, {useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from '../common/titlePage/TitlePage';
import arrow_icon from '../../img/arrow_icon.png';

const ConfirmPhone = () => {
  const [code, setCode] = useState('');
  const [error_code, setErrorCode] = useState(false);

  const enterCode = (key) => {
    if(key !== '') {
      if(code.length === 4) {
        errorCode();
        return;
      }
      let new_code = code + key;
      setCode(new_code);
    } else {
      let new_code = code.substring(0, code.length - 1);
      setCode(new_code);
    }
  };

  const errorCode = () => {
    setErrorCode(true);
    setTimeout(() => {
      setCode('');
      setErrorCode(false);
      window.location.href = '/login';
    }, 200);
  };

  return(
    <Wrapper>
      <Container>
        <TitlePage>Подтверждение телефона</TitlePage>
        <div className={`code ${error_code ? 'error' : ''}`}>
          <div className="number"><span>{code[0]}</span></div>
          <div className="number"><span>{code[1]}</span></div>
          <div className="number"><span>{code[2]}</span></div>
          <div className="number"><span>{code[3]}</span></div>
        </div>
        <div className="keyboard">
          <div className="key" onClick={() => enterCode('1')}><span>1</span></div>
          <div className="key" onClick={() => enterCode('2')}><span>2</span></div>
          <div className="key" onClick={() => enterCode('3')}><span>3</span></div>
          <div className="key" onClick={() => enterCode('4')}><span>4</span></div>
          <div className="key" onClick={() => enterCode('5')}><span>5</span></div>
          <div className="key" onClick={() => enterCode('6')}><span>6</span></div>
          <div className="key" onClick={() => enterCode('7')}><span>7</span></div>
          <div className="key" onClick={() => enterCode('8')}><span>8</span></div>
          <div className="key" onClick={() => enterCode('9')}><span>9</span></div>
          <div className="key"><span></span></div>
          <div className="key" onClick={() => enterCode('0')}><span>0</span></div>
          <div className="key" onClick={() => enterCode('')}><img src={arrow_icon} alt=""/></div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default ConfirmPhone;