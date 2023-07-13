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
                <div key={card.id} className="cards myButton" onClick={() => this.props.clickMe(i)} >
                    {card.shown ?
                            <img className="image" src={card.word}/>
                            : 
                            ''
                            }
                </div>
                )
            }) 
        return (
            <div class="wrapper">
                <h2 className="match">Match The Cards!</h2>
                    <div class="card-wrapper">
                        <div class="template-column">
                            {showCardOnClick}
                        </div>
                    </div>
                    <div className="homebtn">
                        <Link to="/" refresh="true">
                            <button type="button" className="btn btn-sm"> 
                                <h6> Back </h6>
                            </button>
                        </Link>
                    </div>
            </div>
        );  
    }
}

export default Cards;