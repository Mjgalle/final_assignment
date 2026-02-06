import React, { Component } from "react";
import "./cards.css";
import { Link } from "react-router-dom";

class Cards extends Component {
  refreshPage = () => {
    window.location.reload();
  };
  render() {
    let showCardOnClick = this.props.cards.map((card, i) => {
      return (
        <div
          key={i}
          className="cards myButton"
          onClick={() => this.props.clickMe(i)}
        >
          {card.shown ? <img className="image" src={card.word} /> : ""}
        </div>
      );
    });
    console.log("this is props", this.props);
    return (
      <div className="wrapper">
        <h2 className="title">Match The Cards!</h2>

        <div className="template-column">{showCardOnClick}</div>

        <div className="homebtn">
          <Link to="/" refresh="true">
            <button type="button" className="btn btn-sm">
              Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Cards;
