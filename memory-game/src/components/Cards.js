import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cards extends Component {
    
    render () {
        console.log(this.props)
        return (
            <div className="container">
                <h1> {this.props.songs[0].description}</h1>
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
            <div className="contaier">
                <div className="row">
                    <div className="col-md-6">
                        one
                    </div>
                    <div className="col-md-6">
                        two
                    </div>
                </div>
            </div>
            </div>
        );  
    }
}

export default Cards;