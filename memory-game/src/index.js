import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Memory from './Memory';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Memory} />
        </Switch>
    </Router>

, document.getElementById('root')); 

