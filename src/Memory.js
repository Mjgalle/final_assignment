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
          		<button onClick={()=>{this.props.goToCards('easy')}} className="btn-lg navbar-btn"> 
              			<h3>Easy</h3>
            		</button>
				<button onClick={()=>{this.props.goToCards('medium')}} className="btn-lg navbar-btn"> 
              			<h3>Medium</h3>
            		</button>
				<button onClick={()=>{this.props.goToCards('hard')}} className="btn-lg navbar-btn"> 
              			<h3>Hard</h3>
            		</button>
        		</div>
			<div className="smallbutton">
				<Link to ="/Instructions">
					<button className="btn"> 
						<h6> Instructions </h6>
					</button>
				</Link>
			</div>	
      </div>
    );
  }
}

export default Memory;
