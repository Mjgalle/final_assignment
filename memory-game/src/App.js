import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import CardsMed from './components/CardsMed';
import CardsHard from './components/CardsHard';
import Memory from './Memory';
import {Link, Switch, Route} from 'react-router-dom';

function Card(word,  id, shown) {
    this.word = word;
    this.id = id;
    this.shown = false;
}

const cards = [ 
    new Card('/images/Dan.svg',  0),
    new Card('/images/Dan.png',  0),
    new Card('/images/jamie.png',  1),
    new Card('/images/jamie.png',  1),
    new Card('/images/nick.png', 3),
    new Card('/images/nick.png', 3)
]

class App extends Component {
    constructor () {
        super ();
        this.state = {
            Cards: cards,
            gameLevel: ''
        }
    } 

    goToCards = (difficulty) => {    //redirects user to have this url

        this.setState({
            gameLevel: difficulty
        })

        this.props.history.push('/Cards')
    }
      
    render() {
        return (
            <div className="container jumbotron">
                <Switch>
                    <Route path='/Cards' render={(props) => <Cards {...props} cards={this.state.Cards} difficulty={this.state.gameLevel} />}/> 
                    <Route exact path='/' render={(props) => <Memory {...props} goToCards={this.goToCards}  cards={this.state.Cards} />}/>
	            </Switch>
            </div>
        );
    }
}

export default App;