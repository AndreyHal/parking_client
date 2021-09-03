import React from 'react';
import {Container} from "./styles";
import fill_star_icon from '../../../../img/fill_star_icon.png';
import star_icon from '../../../../img/star_icon.png';

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
        <p>Места {props.place ? 'есть' : 'нет'}</p>
        <div className="footer">
          <p>{props.address}</p>
          <img src={props.favorite ? fill_star_icon : star_icon} alt=""/>
        </div>
      </div>
    </Container>
  )
};

export default ParkingTile;