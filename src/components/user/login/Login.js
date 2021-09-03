import React, {useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from '../common/titlePage/TitlePage';
import Input from '../common/input/Input';
import Button from "../common/button/Button";

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

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
        <Button action={() => window.location.href = '/main'}>Войти</Button>
      </Container>
    </Wrapper>
  )
}

export default Login;