import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CardsHard extends Component {

    render () {
        return (
            <div>
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
            </div>
        );  
    }
}

export default CardsHard;