import React, {useState, useEffect, Fragment} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import Search from "../common/search/Search";
import TitlePage from "../common/titlePage/TitlePage";
import SettingsUser from "../settingsUser/SettingsUser";
import ParkingTile from '../common/parkingTile/ParkingTile';
import ParkingPage from "../parkingPage/ParkingPage";
import MainTabs from "../common/mainTabs/MainTabs";

const Main = () => {
  const [parking_list, setParkingList] = useState([]);
  const [parking_id, setParkingId] = useState(null);
  const [tab, setTab] = useState('main'); //main, favorites, booked, settings

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
          title: 'Парковка 6',
          id: 6,
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
          title: 'Парковка 7',
          id: 7,
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
          title: 'Парковка 8',
          id: 8,
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
          title: 'Парковка 9',
          id: 9,
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
          title: 'Парковка 10',
          id: 10,
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
          title: 'Парковка 11',
          id: 11,
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
    setParkingId(null);
  }, [tab]);

  return(
    <Wrapper wide>
      <Container>
        {
          !!parking_id ?
            <ParkingPage id={parking_id}/>
            :
            <Fragment>
              {
                tab === 'main' ?
                  <Search/>
                  :
                  <TitlePage>
                    {tab === 'favorites' ? 'Избранное' : ''}
                    {tab === 'booked' ? 'Забронировано' : ''}
                    {tab === 'settings' ? 'Профиль' : ''}
                  </TitlePage>
              }
              {
                tab === 'settings' ?
                  <SettingsUser/>
                  :
                  parking_list.map((item, index) => (
                    <ParkingTile key={index} {...item} setParkingId={setParkingId}/>
                  ))
              }
            </Fragment>
        }
        <MainTabs tab={tab} setTab={setTab}/>
      </Container>
    </Wrapper>
  )
};

export default Main;