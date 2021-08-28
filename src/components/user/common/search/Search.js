import React from 'react';
import {Container} from "./styles";

const Search = () => {
  return(
    <Container>
      <input type="text"
             placeholder='Поиск'
      />
    </Container>
  )
};

export default Search;