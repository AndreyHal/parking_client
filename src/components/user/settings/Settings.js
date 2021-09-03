import React, {useState} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

const Settings = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [num_of_car, setNumOfCar] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return(
    <Container>
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
      <Button style={{marginBottom: 0}}>Сохранить</Button>
      <p className='cancel-btn'>Отмена</p>
    </Container>
  )
};

export default Settings;