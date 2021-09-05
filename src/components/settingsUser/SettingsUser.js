import React, {useState} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

const SettingsUser = () => {
  const [avatar, setAvatar] = useState('https://neyromed.com.ua/wp-content/uploads/2019/05/dark-green-bg.jpg');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [num_of_car, setNumOfCar] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const uploadAvatar = (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);

    setAvatar(url);
  };

  return(
    <Container>
      <div className="avatar">
        <label>
          <img src={avatar} alt=""/>
          <input type="file"
                 accept="image"
                 onChange={uploadAvatar}
                 hidden
          />
        </label>
      </div>
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

export default SettingsUser;