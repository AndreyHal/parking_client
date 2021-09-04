import React from 'react';
import {Container} from "./styles";

const ReservationTile = ({...props}) => {
  return(
    <Container>
      <div className="photo">
        <img src={props.photo} alt=""/>
      </div>
      <div className="info">
        <div className="header">
          <h2>Код: {props.code}</h2>
        </div>
        <p>{props.number}</p>
        <div className="footer">
          <div>{props.period.start}</div>
          <p>-</p>
          <div>{props.period.end}</div>
        </div>
      </div>
    </Container>
  )
};

export default ReservationTile;