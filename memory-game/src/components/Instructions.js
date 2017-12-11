import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Instructions extends Component {
    render () {
        return (
            <div>
                <div className="match">
                    Instructions
                </div>
                <div className="text">
                    <div className="container1">
                    As you click on the cards, you have to remember to keep an eye on the
                    image of each card. The maximum number of card a user can click is 2. 
                    If those two cards match, they will stay facing the user. If those cards
                    do not match, they will turn back over. 
                    <br />
                    <br />
                    <br />
                    <br />
                    The game is over when all cards have been matched. 
                    </div> 
                </div>
                <div className="instructionsback">
                <Link to="/"><button className="btn-sm"> 
                    <h4>Back</h4></button>
                </Link>
                </div>
            </div> 
        )
    }

}

export default Instructions;