import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    state ={
        currentCard: null,
    }

    showCard = (cards) => {
        this.setState({
            currentCard: this.props.cards[0].word
        });
    }

    getInitialState = () => {
        return { showResults: false };
    }

    onClick = ()=> {
        this.setState({ showResults: true })
    }
    
    render () {
        return (
            <div className="container jumbotron">
                <div>
                    <h1>Match The Cards! </h1>
                </div>
                <div className="row">
                    <div className="col-md-6 card">
                    <button onClick={() => setTimeout(function(){alert('hey');}, 3000)}> Click</button>
                    <p> {this.props.cards[0].word}</p>
                    </div>
                    <div className="col-md-6 col-md-offset-2 cards">
                    <button onClick={this.onClick}>
                    { this.state.showResults ? <p>{this.props.cards[1].word}</p> : null }
                   </button>
                    </div>
                </div>
                <div className="row second">
                    <div className="col-md-6 cards">
                    <p> {this.props.cards[1].word}</p>
                    </div>
                    <div className="col-md-6 col-md-offset-2 card">
                    <p> {this.props.cards[1].description}</p>
                    </div>
                </div>
                <div className="row second">
                    <div className="col-md-6 card">
                    <p> {this.props.cards[2].word}</p>
                    </div>
                    <div className="col-md-6 col-md-offset-2 cards">
                    <p> {this.props.cards[2].description}</p>
                    </div>
                </div>
                <div className="second">
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
                </div>
            </div>
        );  
    }
}

export default Cards;