import React from 'react';
import {Container} from "./styles";
import TitlePage from '../common/titlePage/TitlePage';
import Button from "../common/button/Button";

const RegistrationUser = () => {
  return(
    <Container>
      <TitlePage>Регистрация</TitlePage>
      <input type="text"
             placeholder='Имя'
      />
      <input type="text"
             placeholder='Фамилия'
      />
      <input type="text"
             placeholder='Номер машины'
      />
      <input type="text"
             placeholder='Телефон'
      />
      <input type="text"
             placeholder='Почта'
      />
      <input type="text"
             placeholder='Пароль'
      />
      <input type="text"
             placeholder='Повторите пароль'
      />
      <Button>Зарегистрироваться</Button>
    </Container>
  )
}

export default RegistrationUser;