import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import {API_URL} from "../../config";
import axios from "axios";

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

  const save = () => {
    let request = {
      name: name,
      surname: surname,
      num_of_car: num_of_car,
      phone: phone,
      email: email
    };

    axios.post(API_URL + '/updateUserSettings', request).then(res => {
      console.log('OK');
    });
  };

  useEffect(() => {
    axios.get(API_URL + '/getUserSettings').then(res => {
      let {id, name, surname, phone, email, num_of_car} = res.data;
      setName(name);
      setSurname(surname);
      setNumOfCar(num_of_car);
      setPhone(phone);
      setEmail(email);
    });
  }, []);

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
      <Button style={{marginBottom: 0}} action={save}>Сохранить</Button>
      <p className='cancel-btn'>Отмена</p>
    </Container>
  )
};

export default SettingsUser;