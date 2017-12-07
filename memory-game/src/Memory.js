import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Memory extends Component {
  render() {
    return (
      <div>
			<div className="circle"></div>
				<div className="title">MEMORY</div>
				<div className="buttons">
					<Link to ="/Cards"> 
						<button className="btn-lg navbar-btn active space"> 
							<h3> Easy</h3>
						</button>
					</Link>
					<Link to ="/CardsMed"> 
						<button className="btn-lg navbar-btn active space"> 
							<h3> Medium</h3>
						</button>
					</Link>
					<Link to ="/CardsHard"> 
						<button className="btn-lg navbar-btn active"> 
							<h3>Hard</h3>
						</button>
					</Link>
				</div>	
      </div>
    );
  }
}

export default Memory;
