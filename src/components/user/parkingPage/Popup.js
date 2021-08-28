import React from 'react';
import {PopupCont} from "./styles";
import Button from "../common/button/Button";

const Popup = ({close}) => {
  const redirect = () => {
    window.location.href = '/success';
  };

  return(
    <PopupCont top={window.pageYOffset}>
      <div className="modal">
        <h1>Бронирование</h1>
        <div className="period">
          <input type="text"
                 placeholder='17.08.2021 14:00'
          />
          <p>-</p>
          <input type="text"
                 placeholder='17.08.2021 14:00'
          />
        </div>
        <p className="price">К оплате <span>140₽</span></p>
        <Button action={redirect}>Забронировать</Button>
        <Button action={close}>Отмена</Button>
      </div>
    </PopupCont>
  )
};

export default Popup;