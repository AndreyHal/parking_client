import React, {useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from '../common/titlePage/TitlePage';
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import axios from "axios";
import {API_URL} from "../../config";

const RegistrationUser = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [num_of_car, setNumOfCar] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_pass, setRepeatPass] = useState('');

  const registration = () => {
    let request = {
      name: name,
      surname: surname,
      num_of_car: num_of_car,
      phone: phone,
      email: email,
      password: password
    };
    axios.post(API_URL + '/createUser', request).then(res => {
      window.location.href = '/confirmPhone';
    });
  };

  return(
    <Wrapper>
        <Container>
            <TitlePage>Регистрация</TitlePage>
            <Input type="text"
                   placeholder='Имя'
                   value={name}
                   onChange={e => setName(e.target.value)}
            />
            <Input type="text"
                   placeholder='Фамилия'
                   value={surname}
                   onChange={e => setSurname(e.target.value)}
            />
            <Input type="text"
                   placeholder='Номер машины'
                   value={num_of_car}
                   onChange={e => setNumOfCar(e.target.value)}
            />
            <Input type="text"
                   placeholder='Телефон'
                   value={phone}
                   onChange={e => setPhone(e.target.value)}
            />
            <Input type="text"
                   placeholder='Почта'
                   value={email}
                   onChange={e => setEmail(e.target.value)}
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
            <Button action={registration}>Зарегистрироваться</Button>
        </Container>
    </Wrapper>
  )
}

export default RegistrationUser;