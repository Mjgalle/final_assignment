import React from "react";
import "../cards.css";
import { Link } from "react-router-dom";

const Instructions = ({ data }) => {
  return (
    <div className="wrapper">
      <h2 className="title">{data.instructionsTitle}</h2>
      <p className="containerForInstructions text">
        {data.instructionsDescription}
      </p>
      <Link to="/" className="btn-sm">
        Back
      </Link>
    </div>
  );
};

export default Instructions;
