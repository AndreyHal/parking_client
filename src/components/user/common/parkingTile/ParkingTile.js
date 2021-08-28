import React from 'react';
import {Container} from "./styles";
import star_white from '../../../../img/star_white.png';
import star_black from '../../../../img/star_black.png';

const ParkingTile = ({...props}) => {
  return(
    <Container>
      <div className="photo">
        <img src={props.photos.find(item => item.main).url} alt=""/>
      </div>
      <div className="info">
        <div className="header">
          <h2>{props.title}</h2>
          <p>{props.price}₽/сутки</p>
        </div>
        <p>Места: {props.place ? 'есть' : 'нет'}</p>
        <div className="footer">
          <p>{props.address}</p>
          <img src={props.favorite ? star_black : star_white} alt=""/>
        </div>
      </div>
    </Container>
  )
};

export default ParkingTile;