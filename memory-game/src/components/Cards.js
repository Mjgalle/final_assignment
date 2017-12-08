import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    state = {
        shownCards: this.props.cards
    } 
    componentDidMount () {
        console.log(this.props.cards)

    }

    clickMe = (index) => {
        let __shownCards = this.props.cards;
        __shownCards[index].shown = !__shownCards[index].shown;
        this.setState({
            shownCards: __shownCards
        })
    }
    
    render () {
        let showCardOnClick = this.props.cards.map ((card, i) => {
            return (
                <div key={card.id}>
                    <div className="col-xs-2 col-md-6 cards" onClick={() => this.clickMe(i)} >
                        {card.shown ? <img className="image" src={card.word}/> : ''}
                    </div>
                </div>
                )
            }) 
        return (
            <div>
                <div>
                    <div className="match">Match The Cards!</div>
                </div>
                <div>
                    {showCardOnClick}
                </div>
                <div className="second">
                <Link to="/"><button className="btn-lg navbar-btn active"> <h3>Home </h3></button></Link>
                </div>
            </div>
        );  
    }
}

export default Cards;