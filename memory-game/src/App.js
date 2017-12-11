import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import Memory from './Memory';
import {Switch, Route} from 'react-router-dom';
import Instructions from './components/Instructions';

function Card(word,  id) {
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

//brandNewArray =  () => {
//
//}

class App extends Component {
    constructor () {
        super ();
        this.state = {
            Cards: cards,
            gameLevel: '', 
            allCards: cards,
            state: false,
            numberofClicks: 0,
            sameId: cards
        }
    }

    goToCards = (difficulty) => {               //makes sure that when the difficulty is 
        let emptyArray = []                     //set, it displays a specific # in the array,
        let numberOfPairs = 0                   //along with a specific number of pairs.
        if (difficulty === 'easy') {            //And while it does so,that the random array 
            numberOfPairs = 4                   //with specific # ofpairs, that they 
        } else if ( difficulty === 'medium') {  //have the same id # and can actually match.
            numberOfPairs = 6
        } else {
            numberOfPairs = 11
        }
        for(let n = 0; n < numberOfPairs; n ++) {
            let finished = false 
                while (!finished) {
                    let randomNumber = Math.floor(Math.random() * numberOfPairs)
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
        let currentIndex = Card.length, temporaryValue, randomIndex;    //array of cards
      
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

    clickMe = (index) => {
        if (this.state.numberofClicks < 2) { 
        let __shownCards = Array.from(this.state.Cards);
        let __numberofClicks = this.state.numberofClicks + 1;

        __shownCards[index].shown = !__shownCards[index].shown;
        
        this.setState({
            Cards: __shownCards,
            numberofClicks: __numberofClicks,
        } , () =>{
            if (this.state.numberofClicks === 2) {                      //if the # of clicks is 2
                setTimeout( () => {                                     //wait 1 second to return 
                    __shownCards = __shownCards.map(card => {           //the state to false.
                        card.shown = false
                        return card
                    })
                    __numberofClicks = 0
                    this.setState({
                        Cards: __shownCards,
                        numberofClicks: __numberofClicks 
                    })
                }, 1000) 
              
            } 
        } )
    }
        
    }
      
    render() {
        return (
            <div className="container jumbotron">
                <Switch>
                    <Route path='/Cards' render={(props) => <Cards {...props} cards={this.state.Cards} clickMe={this.clickMe} difficulty={this.state.gameLevel} />}/> 
                    <Route exact path='/' render={(props) => <Memory {...props} goToCards={this.goToCards}  cards={this.state.Cards} />}/>
                    <Route path='/Instructions' render={(props) => <Instructions {...props} />} />
	            </Switch>
            </div>
        );
    }
}

export default App;


/*
    initialState =  ('reset') => {
        function Card(word,  id) {
            this.word = word;
            this.id = id;
            this.shown = false;
        }
        return {
            new Card('/images/Dan.png',  0),
            new Card('/images/Dan.png',  0),
            new Card('/images/jamie.png',  1),
            new Card('/images/jamie.png',  1),
            new Card('/images/nick.png', 2),
            new Card('/images/nick.png', 2),
            new Card('/images/Lily.png', 3),
            new Card('/images/Lily.png', 3),
        }
    resetState () {
        this.state(this.initalState);
    }
}*/
