import React from 'react';
import axios from "axios";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RegistrationUser from "./components/registrationUser/RegistrationUser";
import ConfirmPhone from './components/confirmPhone/ConfirmPhone';
import Login from './components/login/Login';
import ResetPass from './components/resetPass/ResetPass';
import Main from './components/main/Main';
import ParkingPage from "./components/parkingPage/ParkingPage";
import RegistrationParking from "./components/registrationParking/RegistrationParking";
import MainParking from "./components/mainParking/MainParking";

const Link = () => {
  return (
    <div>
      <a href='/registrationUser'>регистрация юзера</a>
      <br/>
      <a href='/registrationParking'>регистрация парковки</a>
    </div>
  )
};

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*  user  */}
        <Route exact path='/' component={Link} />
        <Route exact path='/registrationUser' component={RegistrationUser} />
        <Route exact path='/confirmPhone' component={ConfirmPhone} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/resetPass' component={ResetPass} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/main/:id' component={ParkingPage} />
        {/*  ====  */}
        {/*  parking  */}
        <Route exact path='/registrationParking' component={RegistrationParking} />
        <Route exact path='/mainParking' component={MainParking} />
        {/*  =======  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;