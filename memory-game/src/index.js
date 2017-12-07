import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Memory from './Memory';
import Cards from './components/Cards';
import CardsMed from './components/CardsMed';
import CardsHard from './components/CardsHard';

function Card(word,  id, shown) {
    this.word = word;
    this.id = id;
    this.shown = false;
}

const cards = [ 
    new Card('/images/Dan.png',  0),
    new Card('/images/Dan.png',  0),
    new Card('/images/jamie.png',  1),
    new Card('/images/jamie.png',  1),
    new Card('/images/nick.png', 3),
    new Card('/images/nick.png', 3)
]


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' render={(props) => <Memory {...props} cards={cards} />}/>
            <Route path='/Cards' render={(props) => <Cards {...props} cards={cards} />}/>   
            <Route path='/CardsMed' render={(props) => <CardsMed {...props} cards={cards}/> }/>
            <Route path='/CardsHard' component={CardsHard}  cards={cards}/>
        </Switch>
    </Router>

, document.getElementById('root')); 

