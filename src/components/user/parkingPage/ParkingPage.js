import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";

const ParkingPage = ({id}) => {
  const [selected_slide, setSelectedSlide] = useState(0);
  const [show_popup, setShowPopup] = useState(false);
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1355.2099179127322!2d61.38591050624734!3d55.1625862202672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1630159565540!5m2!1sru!2sru"
          allowFullScreen="" loading="lazy"
        />
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
      <Button>Выбрать даты</Button>
    </Container>
  )
};

export default ParkingPage;