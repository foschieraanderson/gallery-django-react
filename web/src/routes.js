import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Uploads from './pages/Uploads/index';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/upload" component={Uploads} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes;