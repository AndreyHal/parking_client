import React from 'react';
import {Container} from "./styles";
import TitlePage from "../../user/common/titlePage/TitlePage";

const Account = () => {
  return(
    <Container>
      <TitlePage>Личный кабинет</TitlePage>
      <p><a href='/reservations'>Брони</a></p>
      <p><a href='/settings'>Настройки</a></p>
      <p><span>Выход</span></p>
    </Container>
  )
};

export default Account;