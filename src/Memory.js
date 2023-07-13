import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Memory extends Component {
  render() {
    return (
			<div className="circle">
				<h2 className="title">MEMORY</h2>
				<div>		
					<button onClick={()=>{this.props.goToCards('easy')}} className="btn-lg navbar-btn">Easy</button>
					<button onClick={()=>{this.props.goToCards('medium')}} className="btn-lg navbar-btn">Medium</button>
					<button onClick={()=>{this.props.goToCards('hard')}} className="btn-lg navbar-btn"> Hard</button>
				</div>
				<Link to ="/Instructions">
					<button className="btn-sm">Instructions</button>
				</Link>
			</div>
    );
  }
}

export default Memory;
