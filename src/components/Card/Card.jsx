import React from "react";
import "../../styles.css";
import "./card.css";

const Card = (props) => {
  return (
    <>
      {props.details.map((item, index) => (
        <div className="card-container" key={index}>
          <div>
            <h3 className="card-title">{item.title}</h3>
          </div>
          <h2 className="card-desc">{item.value}</h2>
        </div>
      ))}
    </>
  );
};

export default Card;
