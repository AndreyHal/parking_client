import React from 'react';
import {Container} from "./styles";
import search_icon from '../../../../img/search_icon.png';

const Search = () => {
  return(
    <Container>
      <img src={search_icon} alt=""/>
      <input type="text"
             placeholder='Поиск'
      />
    </Container>
  )
};

export default Search;