import React, {useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from '../common/titlePage/TitlePage';

const ConfirmPhone = () => {
  const [code, setCode] = useState('');

  return(
    <Wrapper>
      <Container>
        <TitlePage>Подтверждение телефона</TitlePage>
        <div className="code">
          <div className="number"><span>{code[0]}</span></div>
          <div className="number"><span>{code[1]}</span></div>
          <div className="number"><span>{code[2]}</span></div>
          <div className="number"><span>{code[3]}</span></div>
        </div>
        <div className="keyboard">
          <div className="key"><span>1</span></div>
          <div className="key"><span>2</span></div>
          <div className="key"><span>3</span></div>
          <div className="key"><span>4</span></div>
          <div className="key"><span>5</span></div>
          <div className="key"><span>6</span></div>
          <div className="key"><span>7</span></div>
          <div className="key"><span>8</span></div>
          <div className="key"><span>9</span></div>
          <div className="key"><span></span></div>
          <div className="key"><span>0</span></div>
          <div className="key"><span></span></div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default ConfirmPhone;