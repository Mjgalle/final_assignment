import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class CardsMed extends Component {

    render () {
        return (
            <div className="container jumbotron">
            <div className="row">
                <div className="col-md-3 card">
                <button onClick={() => this.state.flipCard(1)}> Click</button>
                <p> {this.props.cards[0].word}</p>
                </div>
                <div className="col-md-3 cards">
                <p> {this.props.cards[0].description}</p>
                </div>
                <div className="col-md-3 cards">
                <p> {this.props.cards[1].word}</p>
                </div>
                <div className="col-md-3 card">
                <p> {this.props.cards[1].description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 card">
                <p> {this.props.cards[2].word}</p>
                </div>
                <div className="col-md-6 cards">
                <p> {this.props.cards[2].description}</p>
                </div>
            </div>
            <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
        </div>
        );  
    }
}

export default CardsMed;