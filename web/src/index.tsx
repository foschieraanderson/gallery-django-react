import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/Home/App';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
      </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);