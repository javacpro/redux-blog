import React from 'react';
//import { Router, Route, IndexRoute } from 'react-router';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from '../views/Home';
import Detail from '../views/Detail';


const routes = (
    <Router>
        <div>
            <Route path='/' component={Home} />
            <Route path='/detail/:id' component={Detail} />
        </div>
    </Router>
);

export default routes;