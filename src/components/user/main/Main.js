import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Search from "../common/search/Search";
import TitlePage from "../common/titlePage/TitlePage";
import ParkingTile from '../common/parkingTile/ParkingTile';
import MainTabs from "../common/mainTabs/MainTabs";

const Main = () => {
  const [parking_list, setParkingList] = useState([]);
  const [tab, setTab] = useState('main'); //main, favorites, booked

  useEffect(() => {
    let list = [];
    if(tab === 'main') {
      list = [
        {
          title: 'Парковка 1',
          id: 1,
          photos: [
            {
              url: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
              main: false
            },
            {
              url: 'https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image',
              main: true
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
          ],
          photo: '',
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: true,
          favorite: false
        },
        {
          title: 'Парковка 2',
          id: 2,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 80,
          place: false,
          favorite: false
        },
        {
          title: 'Парковка 3',
          id: 3,
          photos: [
            {
              url: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
              main: false
            },
            {
              url: 'https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image',
              main: false
            },
            {
              url: 'https://neyromed.com.ua/wp-content/uploads/2019/05/dark-green-bg.jpg',
              main: true
            },
            {
              url: 'https://st2.depositphotos.com/3926191/10796/i/600/depositphotos_107969666-stock-photo-golden-bokeh-background.jpg',
              main: false
            },
            {
              url: 'https://thumbs.dreamstime.com/b/pink-blue-background-color-alphabet-letter-combination-bg-b-g-logo-icon-design-suitable-company-business-143633430.jpg',
              main: false
            }
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 100,
          place: true,
          favorite: true
        },
        {
          title: 'Парковка 4',
          id: 4,
          photos: [
            {
              url: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
              main: false
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
              main: true
            },
            {
              url: 'https://thumbs.dreamstime.com/b/pink-blue-background-color-alphabet-letter-combination-bg-b-g-logo-icon-design-suitable-company-business-143633430.jpg',
              main: false
            }
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 50,
          place: true,
          favorite: false
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
            {
              url: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
              main: false
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
              main: true
            }
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        }
      ];
    }
    if(tab === 'favorites') {
      list = [
        {
          title: 'Парковка 3',
          id: 3,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 100,
          place: true,
          favorite: true
        },
        {
          title: 'Парковка 5',
          id: 5,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 70,
          place: false,
          favorite: true
        }
      ];
    }
    if(tab === 'booked') {
      list = [
        {
          title: 'Парковка 4',
          id: 4,
          photos: [
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
          ],
          address: 'г. Челябинск, ул. Коммуны, д. 125',
          price: 50,
          place: true,
          favorite: false
        }
      ];
    }
    setParkingList(list);
  }, [tab]);

  return(
    <Container>
      {
        tab === 'main' ?
          <Search/>
          :
          <TitlePage>{tab === 'favorites' ? 'Избранное' : 'Забронировано'}</TitlePage>
      }
      {
        parking_list.map((item, index) => (
          <ParkingTile key={index} {...item}/>
        ))
      }
      <MainTabs tab={tab} setTab={setTab}/>
    </Container>
  )
};

export default Main;