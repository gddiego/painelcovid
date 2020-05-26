import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import TrackerCovid from './pages/TrackerCovid';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={TrackerCovid} />
        </Switch>
        </BrowserRouter>

    );
}