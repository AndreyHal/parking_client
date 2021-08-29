import React from 'react';
import {Container} from "./styles";
import TitlePage from "../../user/common/titlePage/TitlePage";

const ReservationPage = () => {
  return(
    <Container>
      <TitlePage>Имя Фамилия</TitlePage>
      <p>Номер машины: Х111ВА 74</p>
      <p>Код: 123456</p>
      <p>Период: 17.08.2021 14:00 - 19.08.2021 14:00</p>
      <p>Телефон: +71234567890</p>
      <p>Почта: example@mail.ru</p>
    </Container>
  )
};

export default ReservationPage;