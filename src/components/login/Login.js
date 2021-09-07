import React, {useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from '../common/titlePage/TitlePage';
import Input from '../common/input/Input';
import Button from "../common/button/Button";
import axios from 'axios';
import {API_URL} from "../../config";

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    let request = {
      phone: phone,
      password: password
    };

    axios.post(API_URL + '/auth/login', request).then(res => {
      window.location.href = '/main';
    });
  };

  return(
    <Wrapper>
      <Container>
        <TitlePage>Войти</TitlePage>
        <Input type="text"
               placeholder='Телефон'
               value={phone}
               onChange={e => setPhone(e.target.value)}
        />
        <Input type="password"
               placeholder='Пароль'
               value={password}
               onChange={e => setPassword(e.target.value)}
        />
        <a href="/resetPass">Забыли пароль?</a>
        <Button action={login}>Войти</Button>
      </Container>
    </Wrapper>
  )
}

export default Login;