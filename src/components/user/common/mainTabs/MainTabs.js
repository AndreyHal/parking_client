import React from 'react';
import {Container} from "./styles";

const MainTabs = ({tab, setTab}) => {
  return(
    <Container>
      <div className={tab === 'main' ? 'selected' : ''} onClick={() => setTab('main')}></div>
      <div className={tab === 'favorites' ? 'selected' : ''} onClick={() => setTab('favorites')}></div>
      <div className={tab === 'booked' ? 'selected' : ''} onClick={() => setTab('booked')}></div>
    </Container>
  )
};

export default MainTabs;