import React from 'react';
import {Container} from "./styles";
import parking_icon from '../../../img/parking_icon.png';
import parking_gray_icon from '../../../img/parking_gray_icon.png';
import settings_icon from '../../../img/settings_icon.png';
import settings_gray_icon from '../../../img/settings_gray_icon.png';

const MainParkingTabs = ({tab, setTab}) => {
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

export default MainParkingTabs;