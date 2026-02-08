import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Instructions = ({ instructionsData }) => {
  return (
    <div className="wrapper">
      <h2 className="title">{instructionsData.title}</h2>
      <p className="containerForInstructions text">
        {instructionsData.description}
      </p>
      <Link to="/">
        <button className="btn-sm">Back</button>
      </Link>
    </div>
  );
};

export default Instructions;
