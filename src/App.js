import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RegistrationUser from "./components/user/registrationUser/RegistrationUser";
import ConfirmPhone from './components/user/confirmPhone/ConfirmPhone';
import Login from './components/user/login/Login';
import ResetPass from './components/user/resetPass/ResetPass';
import Main from './components/user/main/Main';
import ParkingPage from "./components/user/parkingPage/ParkingPage";
import Success from "./components/user/success/Success";
import RegistrationParking from "./components/parking/registrationParking/RegistrationParking";
import Account from "./components/parking/account/Account";
import Reservations from "./components/parking/reservations/Reservations";
import ReservationPage from "./components/parking/reservationPage/ReservationPage";
import Settings from "./components/parking/settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*  user  */}
        <Route exact path='/registrationUser' component={RegistrationUser} />
        <Route exact path='/confirmPhone' component={ConfirmPhone} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/resetPass' component={ResetPass} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/main/:id' component={ParkingPage} />
        <Route exact path='/success' component={Success} />
        {/*  ====  */}
        {/*  parking  */}
        <Route exact path='/registrationParking' component={RegistrationParking} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/reservations' component={Reservations} />
        <Route exact path='/reservation/:id' component={ReservationPage} />
        <Route exact path='/settings' component={Settings} />
        {/*  =======  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;