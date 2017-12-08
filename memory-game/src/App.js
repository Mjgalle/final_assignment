import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import Memory from './Memory';
import {Switch, Route} from 'react-router-dom';

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
    new Card('/images/nick.png', 2),
    new Card('/images/nick.png', 2)
]

class App extends Component {
    constructor () {
        super ();
        this.state = {
            Cards: cards,
            gameLevel: '', 
            allCards: cards
        }
    }

    goToCards = (difficulty) => {
        let emptyArray = [] 
        let numberOfPairs = 0 
        if (difficulty === 'easy') {
            numberOfPairs = 2
        } else if ( difficulty === 'medium') {
            numberOfPairs = 3
        } else {
            numberOfPairs = 3
        }
        for(let n = 0; n < numberOfPairs; n ++) {
            let finished = false 
            while (!finished) {

            let randomNumber = Math.floor(Math.random() * 3)
            if (!emptyArray.includes(randomNumber)) {
                emptyArray.push(randomNumber)
                finished = true
            }
        }
        }

        let secondArray = this.state.allCards.filter((card, i) =>  {
            return (emptyArray.includes(card.id) )
        }) 
        this.shuffleCards(secondArray)
        this.setState({
            gameLevel: difficulty,
        })
        this.props.history.push('/Cards')
    }

    shuffleCards = (Card) => {
        var currentIndex = Card.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = Card[currentIndex];
          Card[currentIndex] = Card[randomIndex];
          Card[randomIndex] = temporaryValue;
        }
        this.setState({
            Cards: Card
        })
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