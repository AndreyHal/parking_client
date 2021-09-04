import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from 'react-yandex-maps';
import marker_icon from '../../img/marker_icon.png';

const ParkingPage = ({id}) => {
  const [selected_slide, setSelectedSlide] = useState(0);
  const [show_popup, setShowPopup] = useState(false);
  const [show_period, setShowPeriod] = useState(false);
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [code, setCode] = useState('');
  const [center, setCenter] = useState(null);
  const photos = [
    {
      url: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
      main: true
    },
    {
      url: 'https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image',
      main: false
    },
    {
      url: 'https://neyromed.com.ua/wp-content/uploads/2019/05/dark-green-bg.jpg',
      main: false
    },
    {
      url: 'https://st2.depositphotos.com/3926191/10796/i/600/depositphotos_107969666-stock-photo-golden-bokeh-background.jpg',
      main: false
    },
    {
      url: 'https://thumbs.dreamstime.com/b/pink-blue-background-color-alphabet-letter-combination-bg-b-g-logo-icon-design-suitable-company-business-143633430.jpg',
      main: false
    }
  ];

  const switchSlide = (index) => {
    if(index === selected_slide+1) {
      next();
    }
    if(index === selected_slide-1) {
      prev();
    }
  };

  const next = () => {
    if(selected_slide === photos.length-1) {
      return;
    }
    setSelectedSlide(selected_slide + 1);
  };

  const prev = () => {
    if(selected_slide === 0) {
      return;
    }
    setSelectedSlide(selected_slide - 1);
  };

  // useEffect(() => {
  //   document.body.style.overflow = show_popup ? 'hidden' : '';
  // }, [show_popup]);

  const booking = () => {
    setCode('G3E4BH');
  }

  const cancelBooking = () => {
    setCode('');
  };

  useEffect(() => {
    setCenter([55.16210050690382, 61.38369778877151]);
  }, []);

  return(
    <Container>
      {/*{*/}
      {/*  show_popup && <Popup close={() => setShowPopup(false)}/>*/}
      {/*}*/}
      <div className="header">
        <h2>Парковка 1</h2>
        <p>80₽/сутки</p>
      </div>
      <div className="slider">
        <div className="slides">
          {
            photos.map((item, index) => (
              <div className={`slide ${index === selected_slide ? 'active' : ''}
                                     ${index === selected_slide-1 ? 'prev' : ''}
                                     ${index === selected_slide+1 ? 'next' : ''}
                                     ${index === selected_slide-2 ? 'prevPrev' : ''}
                                     ${index === selected_slide+2 ? 'nextNext' : ''}`}

                   key={index}
                   onClick={() => switchSlide(index)}
              >
                <img src={item.url} alt=""/>
              </div>
            ))
          }
        </div>
        <div className="dots">
          {
            photos.map((item, index) => (
              <div className={`dot ${index === selected_slide ? 'active' : ''}`} key={index}/>
            ))
          }
        </div>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate
        nesciunt, nostrum nulla praesentium quaerat quam ratione! Est maxime, quisquam!
      </div>
      <div className="address">
        <p>г. Челябинск, ул. Коммуны, д. 125</p>
        <p className="place">Места есть</p>
      </div>
      <div className="map">
        <YMaps>
          <Map defaultState={{ center: center, zoom: 15 }} width='100%' height='100%'>
            <ZoomControl options={{ float: 'right' }} />
            <GeolocationControl options={{ float: 'left' }} />
            <Placemark geometry={center} options={{
              iconLayout: 'default#image',
              iconImageHref: marker_icon,
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -20],
            }}/>
          </Map>
        </YMaps>
      </div>
      <div className="checkboxes">
        <div className="left">
          <Checkbox checked={true}
                    label='Видео-наблюдение'
          />
          <Checkbox checked={false}
                    label='Крытая парковка'
          />
          <Checkbox checked={false}
                    label='Подземная парковка'
          />
        </div>
        <div className="right">
          <Checkbox checked={true}
                    label='Мотоцикл'
          />
          <Checkbox checked={true}
                    label='Легковой автомобиль'
          />
          <Checkbox checked={false}
                    label='Грузовой автомобиль'
          />
        </div>
      </div>
      {
        show_period &&
          <div className='period'>
            <Input type='text'
                   placeholder='Начальная дата'
                   className='date'
                   value={start_date}
                   onChange={e => setStartDate(e.target.value)}
            />
            <div className='price'>
              <span>{code ? code : '140₽'}</span>
            </div>
            <Input type='text'
                   placeholder='Конечная дата'
                   className='date'
                   value={end_date}
                   onChange={e => setEndDate(e.target.value)}
            />
          </div>
      }
      {
        code ?
          <Button action={cancelBooking}>Отменнить бронь</Button>
          :
          <Button action={show_period ? booking : () => setShowPeriod(true)}>{show_period ? 'Забронировать' : 'Выбрать даты'}</Button>
      }
    </Container>
  )
};

export default ParkingPage;