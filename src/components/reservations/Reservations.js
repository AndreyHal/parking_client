import React from 'react';
import {Container} from "./styles";
import TitlePage from "../common/titlePage/TitlePage";
import Search from "../common/search/Search";
import ReservationTile from "../common/reservationTile/ReservationTile";

const Reservations = () => {
  const reservations = [
    {
      photo: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
      id: 1,
      code: '123456',
      number: 'Х111ВА 74',
      period: {
        start: '17.08.2021 14:00',
        end: '19.08.2021 14:00'
      }
    },
    {
      photo: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
      id: 2,
      code: '123456',
      number: 'Х111ВА 74',
      period: {
        start: '17.08.2021 14:00',
        end: '19.08.2021 14:00'
      }
    },
    {
      photo: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
      id: 3,
      code: '123456',
      number: 'Х111ВА 74',
      period: {
        start: '17.08.2021 14:00',
        end: '19.08.2021 14:00'
      }
    }
  ];

  return(
    <Container>
      <TitlePage>Брони</TitlePage>
      <Search/>
      {
        reservations.map((item, index) => (
          <ReservationTile key={index} {...item}/>
        ))
      }
    </Container>
  )
};

export default Reservations;