import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Memory from './Memory';
import Cards from './components/Cards';
import CardsMed from './components/CardsMed';
import CardsHard from './components/CardsHard';

function Song(word, description, id) {
    this.word = word;
    this.description = description;
    this.id = id;
}

const songs = [ 
    new Song('react', 'thing used to code', 0),
    new Song('express', 'thingused to talk back and forth pages', 1),
    new Song('Apple', 'tastes great', 2)
]


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' render={(props) => <Memory {...props} songs={songs} />}/>
            <Route path='/Cards' render={(props) => <Cards {...props} songs={songs} />}/>
            <Route path='/CardsMed' component={CardsMed} />
            <Route path='/CardsHard' component={CardsHard} />
        </Switch>
    </Router>

, document.getElementById('root')); 

