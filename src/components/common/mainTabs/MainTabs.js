import React from 'react';
import {Container} from "./styles";
import parking_icon from '../../../img/parking_icon.png';
import parking_gray_icon from '../../../img/parking_gray_icon.png';
import fill_star_icon from '../../../img/fill_star_icon.png';
import fill_star_gray_icon from '../../../img/fill_star_gray_icon.png';
import marker_icon from '../../../img/marker_icon.png';
import marker_gray_icon from '../../../img/marker_gray_icon.png';
import settings_icon from '../../../img/settings_icon.png';
import settings_gray_icon from '../../../img/settings_gray_icon.png';

const MainTabs = ({tab, setTab}) => {
  return(
    <Container>
      <div className={tab === 'main' ? 'selected' : ''} onClick={() => setTab('main')}>
        {
          tab === 'main' ?
            <img src={parking_icon} alt=""/>
            :
            <img src={parking_gray_icon} alt=""/>
        }
      </div>
      <div className={tab === 'favorites' ? 'selected' : ''} onClick={() => setTab('favorites')}>
        {
          tab === 'favorites' ?
            <img src={fill_star_icon} alt=""/>
            :
            <img src={fill_star_gray_icon} alt=""/>
        }
      </div>
      <div className={tab === 'booked' ? 'selected' : ''} onClick={() => setTab('booked')}>
        {
          tab === 'booked' ?
            <img src={marker_icon} alt=""/>
            :
            <img src={marker_gray_icon} alt=""/>
        }
      </div>
      <div className={tab === 'settings' ? 'selected' : ''} onClick={() => setTab('settings')}>
        {
          tab === 'settings' ?
            <img src={settings_icon} alt=""/>
            :
            <img src={settings_gray_icon} alt=""/>
        }
      </div>
    </Container>
  )
};

export default MainTabs;