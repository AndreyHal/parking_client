import React from 'react';
import {Container} from "./styles";
import TitlePage from '../common/titlePage/TitlePage';
import Button from "../common/button/Button";

const Login = () => {
  return(
    <Container>
      <TitlePage>Авторизация</TitlePage>
      <div className="form">
        <input type="text"
               placeholder='Телефон'
        />
        <input type="text"
               placeholder='Пароль'
        />
      </div>
      <Button>Войти</Button>
    </Container>
  )
}

export default Login;