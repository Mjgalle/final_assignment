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
    new Song('Node JS', 'a technology built on Googles V8 JavaScript engine', 0),
    new Song('Synchronous Code', 'code that follows a specific order', 1),
    new Song('Asynchronous Code', 'code that does NOT follow a specific order', 2)
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

