import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    state ={
        currentCard: null,
        currentIndex: this.props.cards //this works, but if i do .id then it logs as undefined.
    }

    getInitialState = () => {
        return { showResults: false };//show content when clicked
    }

    onClick = ()=> {
        this.setState({ showResults: true })//show content when clicked , **how can i just show specific content of one card**
        console.log(this.state.currentIndex)//logs all cards
    }

    secondCard = () => {
        let index = this.state.currentIndex 
        this.setState({
			currentIndex: index
		})
    }
    
    render () {
        return (
            <div className="container jumbotron">
                <div>
                    <h1>Match The Cards! </h1>
                </div>
                <div className="row">
                    <div className="col-md-6 card" onClick={(props) => setTimeout(function(props){alert(this.props.cards[0].word);}, 3000)}> {/* if im passing the props into function why is it still saying undefined*/}

                    <p> {this.props.cards[0].word}</p>
                    </div>
                    <div className="col-md-6 col-md-offset-2 cards"  onClick={this.onClick}>
                    
                    { this.state.showResults ? <p>{this.props.cards[0].description} </p>: null }
                   
                    </div>
                </div>
                <div className="row second">
                    <div className="col-md-6 cards"  onClick={this.onClick}>
                    { this.state.showResults ? <p>{this.props.cards[1].word} </p>: null }
                    </div>
                    <div className="col-md-6 col-md-offset-2 card"  onClick={this.onClick}>
                    { this.state.showResults ? <p>{this.props.cards[1].description} </p>: null }
                    </div>
                </div>
                <div className="row second">
                    <div className="col-md-6 card" onClick={this.onClick}>
                    { this.state.showResults ? <p>{this.props.cards[2].word} </p>: null }
                    </div>
                    <div className="col-md-6 col-md-offset-2 cards"  onClick={this.onClick}>
                    { this.state.showResults ? <p>{this.props.cards[2].description} </p>: null }
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