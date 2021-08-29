import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import TitlePage from '../common/titlePage/TitlePage';
import Button from "../common/button/Button";

const ConfirmPhone = () => {
  const [sec, setSec] = useState(300);
  const [can_send, setCanSend] = useState(false);

  const sendCode = () => {
    setSec(300);
    setCanSend(false);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setSec(sec-1);
    }, 1000);

    if(sec === 0) {
      clearInterval(timer);
      setCanSend(true);
    }

    return () => clearInterval(timer);
  }, [sec]);

  return(
    <Container>
      <TitlePage>Подтверждение телефона</TitlePage>
      <input type="text"
             placeholder='Код из СМС'
      />
      {
        can_send ?
          <p className='send' onClick={sendCode}>Выслать код заново</p>
          :
          <p>Выслать код заново можно через {sec} секунд</p>
      }
      <Button>Подтвердить</Button>
    </Container>
  )
}

export default ConfirmPhone;