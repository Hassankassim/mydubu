import React from "react";
import "./card.css";
const Card1 = ({ name, image, title }) => {
  return (
    <div className="card1">
      <div className="card1-image">
        {" "}
        <img className="imgcard" src={image} alt={name} />
      </div>
      <div className="card1-description">
       
  <strong><h4 className="text-body">
          {name}
        </h4></strong>
      </div>
    </div>
  );
};

export default Card1;
