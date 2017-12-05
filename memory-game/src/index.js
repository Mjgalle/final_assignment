import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Memory from './Memory';
import Cards from './components/Cards';
import CardsMed from './components/CardsMed';
import CardsHard from './components/CardsHard';

function Card(word, description, id) {
    this.word = word;
    this.description = description;
    this.id = id;
}

const cards = [ 
    new Card('Node JS', 'a technology built on Googles V8 JavaScript engine', 0),
    new Card('Synchronous Code', 'code that follows a specific order', 1),
    new Card('Asynchronous Code', 'code that does NOT follow a specific ord', 2),
    new Card('React', 'Developed by facebook', 3)
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

