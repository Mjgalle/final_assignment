import React, { Component } from 'react';
import './cards.css';
import {Link} from 'react-router-dom';

class Cards extends Component {
    state = {
        currentIndex: this.props.cards //this works, but if i do .id then it logs as undefined.
    }
    componentDidMount() {     
        console.log('hey')          
    //myFunction = ()=> { for shuffling the array
    //   this.props.cards.sort(function(a, b){return 0.5 - Math.random()}); //needs a string
    //}
    /*shuffleCards = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
        console.log(array)
      }*/           
    }
    

    clickMe = (index) => {
          let __shownCards = this.state.currentIndex;
          __shownCards[index].shown = !__shownCards[index].shown;
          this.setState({
              shownCards: __shownCards
          })
    }
    
    render () {
        let showingCard = this.props.cards.map((card, i) => {
            return (
                <div key={card.id}>
                    <div className="col-md-4 card" onClick={() => this.clickMe(i) } >
                    {card.shown ?  <img  className="image" src= {card.word}/> : ''}
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <div className="match">Match The Cards!</div>
                </div>
                <div className="row">
                    {showingCard}
                </div>
                <div className="second">
                <Link to="/"><button className="btn-lg navbar-btn active">Home</button></Link>
                </div>
            </div>
        );  
    }
}

export default Cards;


/*
getInitialState = () => {
    return { showResults: true };//not show content when clicked
}

onClick = ()=> {
    this.setState({ showResults: true })//show content when clicked , **how can i just show specific content of one card**
    console.log(this.state.currentIndex)//logs all cards
}

  <div className="row second">
<div className="col-md-6 cards"  onClick={this.onClick}>
{ this.state.showResults ? <p>{this.props.cards[1].word} </p>: null }
</div>
<div className="col-md-6 col-md-offset-2 card"  onClick={this.onClick}>
{ this.state.showResults ? <p>{this.props.cards[1].description} </p>: null }
</div>
</div>*/