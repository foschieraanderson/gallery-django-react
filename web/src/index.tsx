import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/Home/App';
import Uploads from './pages/Uploads/index';
import { Login } from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/upload" component={Uploads} />
          <Route path="/login" component={Login} />
      </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);