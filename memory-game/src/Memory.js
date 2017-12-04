import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Memory extends Component {
  render() {
    return (
      <div className="container jumbotron">
          <h1 className="App-title">Welcome to My Memory Game</h1>
          <p>Heres some information about this game.. blah blah 
			reay to play? </p>
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

					
			<h2> MEDIUM </h2>
			<h2> HARD</h2>
			
      </div>
    );
  }
}

export default Memory;
