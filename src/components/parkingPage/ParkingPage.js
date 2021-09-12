import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from 'react-yandex-maps';
import marker_icon from '../../img/marker_icon.png';
import {API_URL} from "../../config";
import axios from "axios";

const ParkingPage = ({...props}) => {
  const [selected_slide, setSelectedSlide] = useState(0);
  const [show_popup, setShowPopup] = useState(false);
  const [show_period, setShowPeriod] = useState(false);
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [code, setCode] = useState('');
  const [center, setCenter] = useState(null);
  const [ymaps, setYmaps] = useState(null);
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
        <h2>{props.name}</h2>
        <p>{props.price}₽/сутки</p>
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
      <div className="desc">{props.description}</div>
      <div className="address">
        <p>г. {props.city}, ул. {props.street}, д. {props.house}</p>
        <p className="place">{props.free_places ? 'Места есть' : 'Мест нет'}</p>
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
          <Checkbox checked={props.video_monitoring}
                    label='Видео-наблюдение'
          />
          <Checkbox checked={props.covered_parking}
                    label='Крытая парковка'
          />
          <Checkbox checked={props.underground_parking}
                    label='Подземная парковка'
          />
        </div>
        <div className="right">
          <Checkbox checked={props.motorbike}
                    label='Мотоцикл'
          />
          <Checkbox checked={props.car}
                    label='Легковой автомобиль'
          />
          <Checkbox checked={props.truck}
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