import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';


class Cards extends Component {
    refreshPage = () => {
        window.location.reload();
    }   
    render () {
        let showCardOnClick = this.props.cards.map ((card, i) => {
            return (
                <div key={card.id}>
                    <div className="col-xs-6 col-md-4 cards myButton" onClick={() => this.props.clickMe(i)} >
                        {card.shown ?
                             <img className="image" src={card.word}/>
                              : 
                              ''
                              }
                    </div>
                </div>
                )
            }) 
        return (
            <div>
                <div className="match">Match The Cards!</div>
                <div className="container">
                <div className="cardsposition">
                    {showCardOnClick}
                </div>
                <div className="homebtn">
                    <Link to="" refresh="true">
                        <button type="button" onClick={this.refreshPage} className="btn btn-sm"> 
                            <h6> Back </h6>
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        );  
    }
}

export default Cards;