import React from 'react';
import {Container} from "./styles";

const ReservationTile = ({...props}) => {
  const openTile = () => {
    if(props.reservation_id === props.id) {
      props.setReservationId(null);
    } else {
      props.setReservationId(props.id);
    }
  };

  return(
    <Container className={props.reservation_id === props.id ? 'opened' : ''} onClick={openTile}>
      <div className="photo">
        <img src={props.photo} alt=""/>
      </div>
      <div className="info">
        <div className="header">
          <h2>{props.code}</h2>
        </div>
        <p>{props.num_of_car}</p>
        <div className="footer">
          {props.start_date} - {props.end_date}
        </div>
        <div className="addition">
          <p className='name'>{props.name} {props.surname}</p>
          <p className='phone'>{props.phone}</p>
          <p className='email'>{props.email}</p>
        </div>
      </div>
    </Container>
  )
};

export default ReservationTile;