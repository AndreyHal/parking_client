import React from 'react';
import {Container} from "./styles";
import TitlePage from '../common/titlePage/TitlePage';
import Button from "../common/button/Button";

const ResetPass = () => {
  return(
    <Container>
      <TitlePage>Восстановление пароля</TitlePage>
      <div className="form">
        <input type="text"
               placeholder='Телефон'
        />
        <input type="text"
               placeholder='Пароль'
        />
        <input type="text"
               placeholder='Повторите пароль'
        />
      </div>
      <Button>Сбросить</Button>
    </Container>
  )
}

export default ResetPass;