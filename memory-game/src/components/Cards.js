import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    
    render () {
        return (
            <div className="container jumbotron">
                <div className="row">
                    <div className="col-md-6 card">
                    <p> {this.props.songs[0].word}</p>
                    </div>
                    <div className="col-md-6 cards">
                    <p> {this.props.songs[0].description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 cards">
                    <p> {this.props.songs[1].word}</p>
                    </div>
                    <div className="col-md-6 card">
                    <p> {this.props.songs[1].description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 card">
                    <p> {this.props.songs[2].word}</p>
                    </div>
                    <div className="col-md-6 cards">
                    <p> {this.props.songs[2].description}</p>
                    </div>
                </div>
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
            </div>
        );  
    }
}

export default Cards;