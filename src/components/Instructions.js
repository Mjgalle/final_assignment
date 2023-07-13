import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Instructions extends Component {
    render () {
        return (
            <div>
                <h2 className="match">
                    Instructions
                </h2>
                <p className="containerForInstructions text">
                    As you click on the cards, you have to remember to keep an eye on the
                    image of each card. The maximum number of card a user can click is 2. 
                    If those two cards match, they will stay facing the user. If those cards
                    do not match, they will turn back over. 

                    The game is over when all cards have been matched. 
                </p> 
                <div className="instructionsback">
                <Link to="/">
                    <button className="btn-sm"> 
                        Back
                    </button>
                </Link>
                </div>
            </div> 
        )
    }

}

export default Instructions;