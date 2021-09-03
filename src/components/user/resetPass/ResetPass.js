import React, {useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from '../common/titlePage/TitlePage';
import Button from "../common/button/Button";
import Input from "../common/input/Input";

const ResetPass = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_pass, setRepeatPass] = useState('');

  return(
    <Wrapper>
      <Container>
        <TitlePage>Сбросить пароль</TitlePage>
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
        <Input type="password"
               placeholder='Повторите пароль'
               value={repeat_pass}
               onChange={e => setRepeatPass(e.target.value)}
        />
        <Button action={() => window.location.href = '/login'}>Сбросить</Button>
      </Container>
    </Wrapper>
  )
}

export default ResetPass;