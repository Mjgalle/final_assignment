import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import Memory from './Memory';
import {Switch, Route} from 'react-router-dom';
import Instructions from './components/Instructions';
import swal from 'sweetalert';

function Card(word,  id) {
    this.word = word;
    this.id = id;
    this.shown = false;
}

const cards = [                                             //all the information im going to be using
    new Card('/images/Dan.png',  0),                        //for the 'cards' of the game
    new Card('/images/Dan.png',  0),
    new Card('/images/jamie copy.png',  1),
    new Card('/images/jamie copy.png',  1),
    new Card('/images/nick.png', 2),
    new Card('/images/nick.png', 2),
    new Card('/images/gavin.png', 3),
    new Card('/images/gavin.png', 3),
    new Card('/images/charley copy.png', 4),    
    new Card('/images/charley copy.png', 4),
    new Card('/images/Lily.png', 5),
    new Card('/images/Lily.png', 5),
    new Card('/images/kim copy 2.png', 6),
    new Card('/images/kim copy 2.png', 6), 
    new Card('/images/noelle.png', 7),
    new Card('/images/noelle.png', 7),
    new Card('/images/sandro.png', 8),
    new Card('/images/sandro.png', 8),
    new Card('/images/maria.png', 9),
    new Card('/images/maria.png', 9)
]

class App extends Component {
    constructor () {
        super ();
        this.state = {
            Cards: cards,
            gameLevel: '', 
            allCards: cards,
            state: false,
            numberofClicks: 0,
            pastGames: [],
        }
    }

    // componentWillMount () {
    //     if (localStorage.getItem('StatsList')) {
    //         this.setState({
    //             pastGames: JSON.parse(localStorage.getItem('StatsList'))
    //         })
    //     }
    // }

    goToCards = (difficulty) => {               //makes sure that when the difficulty is 
        let emptyArray = []                     //set, it displays a specific # in the array,
        let numberOfPairs = 0                   //along with a specific number of pairs.
        if (difficulty === 'easy') {            //And while it does so,that the random array 
            numberOfPairs = 4                   //with specific # ofpairs, that they 
        } else if ( difficulty === 'medium') {  //have the same id # and can actually match.
            numberOfPairs = 6
        } else {
            numberOfPairs = 10
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
          randomIndex = Math.floor(Math.random() * currentIndex);       //rounds to whole #
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
        if (this.state.numberofClicks < 2) {                                   //if # of clicks is less than 2
        let __shownCards = Array.from(this.state.Cards)                        //seting up __shownCards with array of Cards
        let __numberofClicks = this.state.numberofClicks + 1;                  //keep track of clicks
    
        __shownCards[index].shown = !__shownCards[index].shown;                //toggle between shown & not shown
        
        this.setState({                                         
            Cards: __shownCards,                                               //sets State for shown cards
            numberofClicks: __numberofClicks,                                  //sets state for #of clicks 

        } , () => {
            if (this.state.numberofClicks === 2) {                              //once the # of clicks is equal to 2
                setTimeout( () => {                                             //Start the time out function, which is set to 1 second
                    let __stayShowing = Array.from(this.state.Cards).filter((el) => {               //check which cards are set to True
                        return el.shown === true                                                    //if they are we're going to use them
                    });
            
                       const match = __stayShowing.filter((el, index, arr) => {         //going to check array for matches with .shown === true
                           for (let i = 0; i < arr.length; i ++) {                      //loops through array
                               if (el.id === arr[i].id && index !==i) {                 //if there is a match return that match
                                   return el;
                               }
                           }
                    }); 
                   const cardToPutBack =  __shownCards.map((cardToNotShow) => {                //going to see which cards to put back to original state
                        if (match.includes(cardToNotShow)) {                                   //if the 'match' is included in this array,
                            return cardToNotShow                                   
                        } else {
                        cardToNotShow.shown = false                             //sets the state back to false to not show
                            return cardToNotShow                                //puts back this card
                        }       
                    }); 
                    
                    __numberofClicks = 0                                        //if number of clicks is 0
                    this.setState({
                        Cards: cardToPutBack,                                   //returns cards to not show using cardToPutBack
                        numberofClicks: __numberofClicks,                       //returns # of clicks back to 0
                        
                     })
                }, 1000)                                //where amnt of time is set for the setTimeout function.
            }  
        })
    }
        
    }
    componentWillUpdate() {
        var didWin = Array.from(this.state.Cards);
        var trueCard = true;
        for (let i = 0; i < didWin.length; i ++)
            if (didWin[i].shown === true) {
                return didWin
            }
           if(didWin === trueCard) {
               swal('congrats you won')
           }
    }
      
    render() {
        return (
            <div className="container jumbotron">
                <Switch>
                    <Route path='/Cards' render={(props) => 
                        <Cards {...props} cards={this.state.Cards} 
                                          clickMe={this.clickMe} 
                                          difficulty={this.state.gameLevel} />} /> 

                    <Route exact path='/' render={(props) => 
                        <Memory {...props} goToCards={this.goToCards}  
                                           cards={this.state.Cards} />}/>

                    <Route path='/Instructions' render={(props) => 
                        <Instructions {...props} />} />
	            </Switch>
            </div>
        );
    }
}

export default App;

