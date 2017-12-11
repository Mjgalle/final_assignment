import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {

 
    
    render () {
        let showCardOnClick = this.props.cards.map ((card, i) => {
            return (
                <div key={card.id}>
                    <div className="col-xs-2 col-md-4 cards" onClick={() => this.props.clickMe(i)} >
                        {card.shown ? <img className="image" src={card.word}/> : ''}
                    </div>
                </div>
                )
            }) 
        return (
            <div>
                <div className="match">Match The Cards!</div>
                <div className="cardsposition">
                {showCardOnClick}
                </div>
                <div className="homebtn">
                    <Link to="/">
                        <button className="btn btn-sm"> 
                            <h6> back </h6>
                        </button>
                    </Link>
                </div>
            </div>
        );  
    }
}

export default Cards;