import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CardsMed extends Component {

    render () {
        return (
            <div>
                MEDIUM
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
            </div>
        );  
    }
}

export default CardsMed;