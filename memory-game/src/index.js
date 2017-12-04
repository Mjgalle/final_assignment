import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Memory from './Memory';
import Cards from './components/Cards';
import CardsMed from './components/CardsMed';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Memory} />
            <Route path='/Cards' component={Cards} />
            <Route path='/CardsMed' component={CardsMed} />
        </Switch>
    </Router>

, document.getElementById('root')); 

