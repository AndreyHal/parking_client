import React from 'react';
import {Container} from "./styles";
import TitlePage from "../common/titlePage/TitlePage";
import Button from "../common/button/Button";

const Success = () => {
  const redirect = () => {
    window.location.href = '/main';
  };

  return(
    <Container>
      <TitlePage>Успешно</TitlePage>
      <div className="period">
        <input type="text"
               placeholder='17.08.2021 14:00'
        />
        <p>-</p>
        <input type="text"
               placeholder='17.08.2021 14:00'
        />
      </div>
      <p className="address">г. Челябинск, ул. Коммуны, д. 125</p>
      <p className="number">Номер брони: <span>123456</span></p>
      <Button action={redirect}>На главную</Button>
    </Container>
  )
};

export default Success;