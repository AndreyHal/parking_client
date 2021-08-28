import React from 'react';
import {Container} from "./styles";
import Button from "../common/button/Button";

const ParkingPage = ({...props}) => {
  return(
    <Container>
      <div className="header">
        <h2>Парковка 1</h2>
        <p>80₽/сутки</p>
      </div>
      <div className="slider">
        <div className="slides">
          {
            [1,2,3,4,5].map((item, index) => (
              <div className="slide">
                <img src="" alt=""/>
              </div>
            ))
          }
        </div>
        <div className="dots">
          {
            [1,2,3,4,5].map((item, index) => (
              <div className="dot"/>
            ))
          }
        </div>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate
        nesciunt, nostrum nulla praesentium quaerat quam ratione! Est maxime, quisquam!
      </div>
      <p className="address">г. Челябинск, ул. Коммуны, д. 125</p>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1355.2099179127322!2d61.38591050624734!3d55.1625862202672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1630159565540!5m2!1sru!2sru"
          allowFullScreen="" loading="lazy"
        />
      </div>
      <p className="place">Места: есть</p>
      <Button>Забронировать</Button>
    </Container>
  )
};

export default ParkingPage;