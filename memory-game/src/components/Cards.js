import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cards extends Component {
    
    render () {
        console.log(this.props)
        return (
            <div>
                Hey
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
            
            </div>
        );  
    }
}

export default Cards;