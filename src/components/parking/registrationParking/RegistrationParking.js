import React, {Fragment, useState} from 'react';
import {Container} from "./styles";
import TitlePage from "../../user/common/titlePage/TitlePage";
import Button from "../../user/common/button/Button";

const RegistrationParking = () => {
  const [next_page, setNextPage] = useState(false);

  return(
    <Container>
      <TitlePage>Регистрация</TitlePage>
      {
        next_page ?
          <Fragment>
            <input type="text"
                   placeholder='Город'
            />
            <input type="text"
                   placeholder='Улица'
            />
            <input type="text"
                   placeholder='Дом'
            />
            <input type="text"
                   placeholder='Количество всех мест'
            />
            <input type="text"
                   placeholder='Стоимость (руб.)'
            />
            <Button>Зарегистрироваться</Button>
            <Button action={() => setNextPage(false)}>Назад</Button>
          </Fragment>
          :
          <Fragment>
            <input type="text"
                   placeholder='Название'
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
            <Button action={() => setNextPage(true)}>Далее</Button>
          </Fragment>
      }
    </Container>
  )
};

export default RegistrationParking;