import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = ({ cards, clickMe }) => {
  let showCardOnClick = cards.map((card, i) => {
    return (
      <div key={card.uid} className="cards myButton" onClick={() => clickMe(i)}>
        {card.shown ? (
          <img className="image" alt="card.word" src={card.word} />
        ) : null}
      </div>
    );
  });
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
};

export default Cards;
