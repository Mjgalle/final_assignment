import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const difficultyLevels = ["easy", "medium", "hard"];

const Memory = ({ goToCards }) => {
  return (
    <div className="circle">
      <h2 className="title main-title">Memory</h2>
      <div className="btn-group">
        {difficultyLevels.map((level) => (
          <button
            key={level}
            onClick={() => {
              goToCards(level);
            }}
            className="btn-lg navbar-btn"
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
      <Link to="/Instructions">
        <button className="btn-sm">Instructions</button>
      </Link>
    </div>
  );
};

export default Memory;
