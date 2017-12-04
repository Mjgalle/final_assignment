import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    
    render () {
        console.log(this.props)
        return (
            <div className="container">
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 card">
                    <h1> {this.props.songs[0].word}</h1>
                    </div>
                    <div className="col-md-6 cards">
                    <h1> {this.props.songs[0].description}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 cards">
                    <h1> {this.props.songs[1].word}</h1>
                    </div>
                    <div className="col-md-6 card">
                    <h1> {this.props.songs[1].description}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 card">
                    <h1> {this.props.songs[2].word}</h1>
                    </div>
                    <div className="col-md-6 cards">
                    <h1> {this.props.songs[2].description}</h1>
                    </div>
                </div>
            </div>
            </div>
        );  
    }
}

export default Cards;