import React, {Fragment, useState} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import Search from "../common/search/Search";
import MainParkingTabs from "../common/mainParkingTabs/MainParkingTabs";
import TitlePage from "../common/titlePage/TitlePage";
import SettingsParking from "../settingsParking/SettingsParking";
import ReservationTile from "../common/reservationTile/ReservationTile";

const MainParking = () => {
  const [tab, setTab] = useState('main');  //main, settings
  const [reservation_id, setReservationId] = useState(null);

  const reservations_list = [
    {
      id: 1,
      creating: '30.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 2,
      creating: '30.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 3,
      creating: '30.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 4,
      creating: '29.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 5,
      creating: '29.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 6,
      creating: '28.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 7,
      creating: '27.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 8,
      creating: '27.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 9,
      creating: '27.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 10,
      creating: '26.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 11,
      creating: '26.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    },
    {
      id: 12,
      creating: '25.08.2021',
      code: 'G3E4BH',
      photo: 'https://bgeraser.com/v2.1/images/webp/bgeraser-sample-4.webp',
      num_of_car: 'X123AC 74',
      start_date: '30.08.2021',
      end_date: '31.08.2021',
      name: 'Имя',
      surname: 'Фамилия',
      phone: '+7(900) 012-34-45',
      email: 'example@mail.ru'
    }
  ];

  return(
    <Wrapper wide>
      <Container>
        {
          tab === 'main' ?
            <Search/>
            :
            <TitlePage>
              {tab === 'settings' ? 'Настройки' : ''}
            </TitlePage>
        }
        {
          tab === 'settings' ?
            <SettingsParking/>
            :
            reservations_list.map((item, index) => (
              <Fragment>
                {
                  index === 0 || (index > 1 && item.creating !== reservations_list[index-1].creating) ? <div className="creating">{item.creating}</div> : null
                }
                <ReservationTile key={index}
                                 {...item}
                                 reservation_id={reservation_id}
                                 setReservationId={setReservationId}
                />
              </Fragment>
            ))
        }
        <MainParkingTabs tab={tab} setTab={setTab}/>
      </Container>
    </Wrapper>
  )
};

export default MainParking;