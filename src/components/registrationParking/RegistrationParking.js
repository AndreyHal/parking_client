import React, {Fragment, useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import TitlePage from "../common/titlePage/TitlePage";
import Input from "../common/input/Input";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";

const RegistrationParking = () => {
  const [next_page, setNextPage] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [place_count, setPlaceCount] = useState('');
  const [price, setPrice] = useState('');
  const [pass, setPass] = useState('');
  const [reset_pass, setResetPass] = useState('');
  const [video_monitoring, setVideoMonitoring] = useState(false);
  const [covered_parking, setCoveredParking] = useState(false);
  const [underground_parking, setUndergroundParking] = useState(false);
  const [motorbike, setMotorbike] = useState(false);
  const [car, setCar] = useState(false);
  const [truck, setTruck] = useState(false);

  return(
    <Wrapper>
      <Container>
        <TitlePage>Регистрация</TitlePage>
        {
          next_page ?
            <Fragment>
              <Input type="text"
                     placeholder='Город'
                     value={city}
                     onChange={e => setCity(e.target.value)}
              />
              <Input type="text"
                     placeholder='Улица'
                     value={street}
                     onChange={e => setStreet(e.target.value)}
              />
              <Input type="text"
                     placeholder='Дом'
                     value={house}
                     onChange={e => setHouse(e.target.value)}
              />
              <Input type="text"
                     placeholder='Кличество мест'
                     value={place_count}
                     onChange={e => setPlaceCount(e.target.value)}
              />
              <Input type="text"
                     placeholder='Стоимость (₽/сутки)'
                     value={price}
                     onChange={e => setPrice(e.target.value)}
              />
              <div className="checkboxes">
                <div className="left">
                  <Checkbox label='Видео-наблюдение'
                            checked={video_monitoring}
                            onChange={e => setVideoMonitoring(e.target.checked)}
                  />
                  <Checkbox label='Крытая парковка'
                            checked={covered_parking}
                            onChange={e => setCoveredParking(e.target.checked)}
                  />
                  <Checkbox label='Подземная парковка'
                            checked={underground_parking}
                            onChange={e => setUndergroundParking(e.target.checked)}
                  />
                </div>
                <div className="right">
                  <Checkbox label='Мотоцикл'
                            checked={motorbike}
                            onChange={e => setMotorbike(e.target.checked)}
                  />
                  <Checkbox label='Легковой автомобиль'
                            checked={car}
                            onChange={e => setCar(e.target.checked)}
                  />
                  <Checkbox label='Грузовой автомобиль'
                            checked={truck}
                            onChange={e => setTruck(e.target.checked)}
                  />
                </div>
              </div>
              <Button style={{marginBottom: 0}} action={() => window.location.href = '/reservations'}>Зарегистрироваться</Button>
              <p className='cancel-btn' onClick={() => setNextPage(false)}>Назад</p>
            </Fragment>
            :
            <Fragment>
              <Input type="text"
                     placeholder='Название'
                     value={name}
                     onChange={e => setName(e.target.value)}
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
                     value={pass}
                     onChange={e => setPass(e.target.value)}
              />
              <Input type="password"
                     placeholder='Повторите пароль'
                     value={reset_pass}
                     onChange={e => setResetPass(e.target.value)}
              />
              <Button action={() => setNextPage(true)}>Далее</Button>
            </Fragment>
        }
      </Container>
    </Wrapper>
  )
};

export default RegistrationParking;