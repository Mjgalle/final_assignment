import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    state = {
        shownCards: this.props.cards
    }
    componentDidMount() {   
            if (this.props.Difficulty === 'easy') {
            console.log('this is the easy stuff') }  
             if (this.props.Difficulty === 'medium') {
                 console.log('this is the medium stuff') 
                }
             if (this.props.Difficulty === 'hard') {
                 console.log('this is the hard cards!! which i still need to make')
             }        
    } 

    clickMe = (index) => {
        let __shownCards = this.props.cards;
        __shownCards[index].shown = !__shownCards[index].shown;
        this.setState({
            shownCards: __shownCards
        })
  }


    /* if level of difficulty is easy, render out, 4 cards
        if level of difficulty is medium, render out, 6 cards, 
        if level of difficulty is hard, render out 8 cards... */ 
    
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
                    {easyCards}
                  {/*}  {showingCard}*/}
                </div>
                <div className="second">
                <Link to="/"><button className="btn-lg navbar-btn active"> <h3>Home </h3></button></Link>
                </div>
            </div>
        );  
    }
}

export default Cards;