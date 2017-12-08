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
    new Card('/images/nick.png', 2),
    new Card('/images/Lily.png', 3),
    new Card('/images/Lily.png', 3),
    new Card('/images/charley.png', 4),    
    new Card('/images/charley.png', 4),
    new Card('/images/gavin.png', 5),
    new Card('/images/gavin.png', 5),
    new Card('/images/Jin.png', 6),
    new Card('/images/Jin.png', 6),
    new Card('/images/kim.png', 7),
    new Card('/images/kim.png', 7),
    new Card('/images/maria.png', 8),
    new Card('/images/maria.png', 8), 
    new Card('/images/noelle.png', 9),
    new Card('/images/noelle.png', 9),
    new Card('/images/sandro.png', 10),
    new Card('/images/sandro.png', 10),
    
]

class App extends Component {
    constructor () {
        super ();
        this.state = {
            Cards: cards,
            gameLevel: '', 
            allCards: cards,
        }
    }

    goToCards = (difficulty) => {               //makes sure that when the difficulty is 
        let emptyArray = []                     //set, it displays a specific # in the array,
        let numberOfPairs = 0                   //along with a specific number of pairs.
        if (difficulty === 'easy') {            //And while it does so,that the random array 
            numberOfPairs = 2                   //with specific # ofpairs, that they 
        } else if ( difficulty === 'medium') {  //have the same id # and can actually match.
            numberOfPairs = 3
        } else {
            numberOfPairs = 4
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
            return (emptyArray.includes(card.id) )      //this is where the function
        })                                              //makes sure that they have
        this.shuffleCards(secondArray)                  //the same Id so the cards    
        this.setState({                                 //can have a match
            gameLevel: difficulty
        })
        this.props.history.push('/Cards')
    }

    shuffleCards = (Card) => {                                          //this shuffles the
        var currentIndex = Card.length, temporaryValue, randomIndex;    //array of cards
      
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