import React from 'react';
import {Container} from "./styles";
import axios from "axios";
import {API_URL} from "../../../config";
import fill_star_icon from '../../../img/fill_star_icon.png';
import star_icon from '../../../img/star_icon.png';

const ParkingTile = ({...props}) => {
  const changeFavorite = () => {
    console.log({...props});
    let url = props.is_favorite ? '/removeFavorite' : '/addFavorite';
    axios.post(API_URL + url, {parking_id: props.id}).then(res => {

    });
  };

  const openParking = () => {
    props.setParkingId(props.id);
  };

  return(
    <Container>
      <div className="photo" onClick={openParking}>
        <img src={props?.photos?.find(item => item.main).url} alt=""/>
      </div>
      <div className="info">
        <div className="header" onClick={openParking}>
          <h2>{props.name}</h2>
          <p>{props.price}₽/сутки</p>
        </div>
        <p onClick={openParking}>Места {props.free_places ? 'есть' : 'нет'}</p>
        <div className="footer">
          <p onClick={openParking}>{props.city}, {props.street}, {props.house}</p>
          <img src={props.is_favorite ? fill_star_icon : star_icon} onClick={changeFavorite} alt=""/>
        </div>
      </div>
    </Container>
  )
};

export default ParkingTile;