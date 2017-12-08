import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    state = {
        Card: this.props.cards, //this works, but if i do .id then it logs as undefined.
        Difficulty: this.props.difficulty
    }
    componentDidMount() {  
        console.log(this.props.difficulty)           
    /*shuffleCards = (Card) => {
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
      }    */      
    }

    /* if level of difficulty is easy, render out, 4 cards
        if level of difficulty is medium, render out, 6 cards, 
        if level of difficulty is hard, render out 8 cards... */ 
    

    clickMe = (index) => {
          let __shownCards = this.state.Card;
          __shownCards[index].shown = !__shownCards[index].shown;
          this.setState({
              shownCards: __shownCards
          })
    }

    showEasy = (Difficulty) => {
        if (Difficulty === 'easy') {

        }
    }
    
    render () {
        console.log(this.props.difficulty)
        let easyCards = this.props.cards.map ((card, i) => {
            return (
                <div key={card.id}>
                    <div className="col-xs-2 col-md-6 cards" onClick={() => this.clickMe(i)} >
                        {card.shown ? <img className="image" src={card.word}/> : ''}
                    </div>
                </div>
                )
            })
        let showingCard = this.props.cards.map((card, i) => {
            return (
                <div key={card.id}>
                    <div className="col-md-4 card" onClick={() => this.clickMe(i) } >
                    {card.shown ?  <img  className="image" src= {card.word}/> : ''}
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <div className="match">Match The Cards!</div>
                </div>
                <div className="row">
                    {this.props.difficulty}
                    {easyCards}
                    {showingCard}
                </div>
                <div className="second">
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
                </div>
            </div>
        );  
    }
}

export default Cards;