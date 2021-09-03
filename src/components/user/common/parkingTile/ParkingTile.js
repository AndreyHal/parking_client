import React from 'react';
import {Container} from "./styles";
import fill_star_icon from '../../../../img/fill_star_icon.png';
import star_icon from '../../../../img/star_icon.png';

const ParkingTile = ({...props}) => {
  const addFavorite = () => {
    console.log({...props});
  };

  const openParking = () => {
    props.setParkingId(props.id);
  };

  return(
    <Container>
      <div className="photo" onClick={openParking}>
        <img src={props.photos.find(item => item.main).url} alt=""/>
      </div>
      <div className="info">
        <div className="header" onClick={openParking}>
          <h2>{props.title}</h2>
          <p>{props.price}₽/сутки</p>
        </div>
        <p onClick={openParking}>Места {props.place ? 'есть' : 'нет'}</p>
        <div className="footer">
          <p onClick={openParking}>{props.address}</p>
          <img src={props.favorite ? fill_star_icon : star_icon} onClick={addFavorite} alt=""/>
        </div>
      </div>
    </Container>
  )
};

export default ParkingTile;