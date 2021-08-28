import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./components/user/registration/Registration";
import ConfirmPhone from './components/user/confirmPhone/ConfirmPhone';
import Login from './components/user/login/Login';
import ResetPass from './components/user/resetPass/ResetPass';
import Main from './components/user/main/Main';
import ParkingPage from "./components/user/parkingPage/ParkingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*  user  */}
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/confirmPhone' component={ConfirmPhone} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/resetPass' component={ResetPass} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/main/:id' component={ParkingPage} />
        {/*  ====  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;