import React, {useState} from 'react';
import {Container} from "./styles";
import TitlePage from "../../user/common/titlePage/TitlePage";
import Button from "../../user/common/button/Button";
import close from '../../../img/close.png';

const Settings = () => {
  const [selected_slide, setSelectedSlide] = useState(0);
  const [files, setFiles] = useState([]);
  let photos = [
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

  const addPhoto = (e) => {
    let input_files = e.target.files;
    let arr = [...files];
    for(let i=0; i<input_files.length; i++) {
      arr.push(input_files[i]);
    }
    setFiles(arr);
  };

  const deleteNewPhoto = (index) => {
    let arr = [...files];
    arr.splice(index, 1);
    setFiles(arr);
  };

  const deletePhoto = (index) => {
    photos.splice(index, 1);
  };

  return(
    <Container>
      <TitlePage>Настройки</TitlePage>
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
                <img src={close} className="delete" onClick={index => deletePhoto(index)} alt=""/>
                <img src={item.url} alt=""/>
                {
                  !item.main && <div className="btn">Сделать главной</div>
                }
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
      <label>
        <div className='addPhoto'>Загрузить фото</div>
        <input type="file"
               onChange={addPhoto}
               accept='image'
               multiple
               hidden
        />
      </label>
      <div className="newPhotos">
        {
          files.map((item, index) => (
            <div className="titlePhoto" key={index}>
              <span>{item.name}</span>
              <img src={close} onClick={() => deleteNewPhoto(index)} alt=""/>
            </div>
          ))
        }
      </div>
      <input type="text"
             placeholder='Название'
      />
      <input type="text"
             placeholder='Описание'
      />
      <input type="text"
             placeholder='Город'
      />
      <input type="text"
             placeholder='Улица'
      />
      <input type="text"
             placeholder='Дом'
      />
      <input type="text"
             placeholder='Количество всех мест'
      />
      <input type="text"
             placeholder='Стоимость (руб.)'
      />
      <input type="text"
             placeholder='Телефон'
      />
      <input type="text"
             placeholder='Почта'
      />
      <Button>Сохранить</Button>
      <Button>Отмена</Button>
    </Container>
  )
};

export default Settings;