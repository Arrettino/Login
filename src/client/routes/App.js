import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login/forgot-password' component={ForgotPassword} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
