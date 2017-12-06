import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Memory extends Component {
  render() {
    return (
      <div className="container jumbotron">
          <h1>MEMORY.. </h1>
			<h2> ... got one? </h2>

			<div className="firstbox"> </div>
			<div className="circle"> </div>
				
			<div className="button">
				<Link to ="/Cards"> 
					<button className="btn-lg navbar-btn active"> 
						<h3> Easy</h3>
					</button>
				</Link>
			</div>

			<div className="button">
			<Link to ="/CardsMed"> <button className="btn-lg navbar-btn active"> 
				<h3> Medium</h3>
					</button>
					</Link>
			</div>

					
			<div className="button">
			<Link to ="/CardsHard"> <button className="btn-lg navbar-btn active"> 
				<h3>Hard</h3>
					</button>
					</Link>
			</div>
			
      </div>
    );
  }
}

export default Memory;
