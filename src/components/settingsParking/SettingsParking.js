import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Input from "../common/input/Input";
import Textarea from "../common/textarea/Textarea";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";
import close from '../../img/close.png';
import {API_URL} from "../../config";
import axios from "axios";

const SettingsParking = () => {
  const [selected_slide, setSelectedSlide] = useState(0);
  const [files, setFiles] = useState([]);
  const [preview_files, setPreviewFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [place_count, setPlaceCount] = useState('');
  const [price, setPrice] = useState('');
  const [video_monitoring, setVideoMonitoring] = useState(false);
  const [covered_parking, setCoveredParking] = useState(false);
  const [underground_parking, setUndergroundParking] = useState(false);
  const [motorbike, setMotorbike] = useState(false);
  const [car, setCar] = useState(false);
  const [truck, setTruck] = useState(false);

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
    console.log(arr);
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

  const makeIsMain = (index) => {
    photos.map((item, indexImg) => item.main = index === indexImg);
  };

  const save = () => {
    let request = {
      name,
      phone,
      email,
      city,
      street,
      house,
      count_place: place_count,
      price,
      free_places: true,
      description,
      video_monitoring,
      covered_parking,
      underground_parking,
      motorbike,
      car,
      truck
    };

    axios.post(API_URL + '/updateParkingSettings', request).then(res => {
      console.log('OK');
    });
  };

  useEffect(() => {
    axios.get(API_URL + '/getParkingSettings').then(res => {
      let {id,
           name,
           phone,
           email,
           city,
           street,
           house,
           count_place,
           price,
           free_places,
           description,
           video_monitoring,
           covered_parking,
           underground_parking,
           motorbike,
           car,
           truck} = res.data;
      setName(name);
      setDescription(description);
      setPhone(phone);
      setEmail(email);
      setCity(city);
      setStreet(street);
      setHouse(house);
      setPlaceCount(count_place);
      setPrice(price);
      setVideoMonitoring(video_monitoring);
      setCoveredParking(covered_parking);
      setUndergroundParking(underground_parking);
      setMotorbike(motorbike);
      setCar(car);
      setTruck(truck);
    });
  }, []);

  return(
    <Container>
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
                <img src={close} className="delete" onClick={() => deletePhoto(index)} alt=""/>
                <img src={item.url} alt=""/>
                {
                  !item.main && <Button action={() => makeIsMain(index)}>Сделать главной</Button>
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
        <Button>Загрузить фото</Button>
        <input type="file"
               onChange={addPhoto}
               accept='image'
               multiple
               hidden
        />
      </label>
      {
        !!files.length &&
        <div className="new-photos">
          {
            files.map((item, index) => (
              <div className="preview-photo" key={index}>
                <img src={URL.createObjectURL(item)} alt=""/>
                <img src={close} className='delete' onClick={() => deleteNewPhoto(index)} alt=""/>
              </div>
            ))
          }
        </div>
      }
      <Input type="text"
             placeholder='Название'
             value={name}
             onChange={e => setName(e.target.value)}
      />
      <Textarea rows="4"
                placeholder='Описание'
                value={description}
                onChange={e => setDescription(e.target.value)}
      />
      <Input type="text"
             placeholder='Город'
             value={city}
             onChange={e => setCity(e.target.value)}
      />
      <Input type="text"
             placeholder='Улица'
             value={street}
             onChange={e => setStreet(e.target.value)}
      />
      <Input type="text"
             placeholder='Дом'
             value={house}
             onChange={e => setHouse(e.target.value)}
      />
      <Input type="text"
             placeholder='Количество мест'
             value={place_count}
             onChange={e => setPlaceCount(e.target.value)}
      />
      <Input type="text"
             placeholder='Стоимость (₽/сутки)'
             value={price}
             onChange={e => setPrice(e.target.value)}
      />
      <Input type="text"
             placeholder='Телефон'
             value={phone}
             onChange={e => setPhone(e.target.value)}
      />
      <Input type="text"
             placeholder='Почта'
             value={email}
             onChange={e => setEmail(e.target.value)}
      />
      <div className="checkboxes">
        <div className="left">
          <Checkbox label='Видео-наблюдение'
                    checked={video_monitoring}
                    onChange={e => setVideoMonitoring(e.target.checked)}
          />
          <Checkbox label='Крытая парковка'
                    checked={covered_parking}
                    onChange={e => setCoveredParking(e.target.checked)}
          />
          <Checkbox label='Подземная парковка'
                    checked={underground_parking}
                    onChange={e => setUndergroundParking(e.target.checked)}
          />
        </div>
        <div className="right">
          <Checkbox label='Мотоцикл'
                    checked={motorbike}
                    onChange={e => setMotorbike(e.target.checked)}
          />
          <Checkbox label='Легковой автомобиль'
                    checked={car}
                    onChange={e => setCar(e.target.checked)}
          />
          <Checkbox label='Грузовой автомобиль'
                    checked={truck}
                    onChange={e => setTruck(e.target.checked)}
          />
        </div>
      </div>
      <Button style={{marginBottom: 0}} action={save}>Сохранить</Button>
      <p className='cancel-btn'>Назад</p>
    </Container>
  )
};

export default SettingsParking;