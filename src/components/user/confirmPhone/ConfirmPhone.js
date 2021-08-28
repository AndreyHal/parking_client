import React from 'react';
import {Container} from "./styles";
import TitlePage from '../common/titlePage/TitlePage';
import Button from "../common/button/Button";

const ConfirmPhone = () => {
  return(
    <Container>
      <TitlePage>Подтверждение телефона</TitlePage>
      <div className="form">
        <input type="text"
               placeholder='Код из СМС'
        />
      </div>
      <Button>Подтвердить</Button>
    </Container>
  )
}

export default ConfirmPhone;