import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Memory extends Component {
  render() {
	console.log(this.props.songs[0].word)
    return (
      <div className="container jumbotron">
	 
          <h1 className="App-title">Welcome to My Memory Game</h1>
          <p>Heres some information about this game.. blah blah 
			reay to play? </p>
			
			<h1> {this.props.songs[0].description}</h1>
			<p> Did this work? </p>
			<div className="button">
			<Link to ="/Cards"> <button className="btn-lg navbar-btn active"> 
				<h2> EASY</h2>
					</button>
					</Link>
			</div>

			<div className="button">
			<Link to ="/CardsMed"> <button className="btn-lg navbar-btn active"> 
				<h2> MEDIUM</h2>
					</button>
					</Link>
			</div>

					
			<div className="button">
			<Link to ="/CardsHard"> <button className="btn-lg navbar-btn active"> 
				<h2>Hard</h2>
					</button>
					</Link>
			</div>
			
      </div>
    );
  }
}

export default Memory;
