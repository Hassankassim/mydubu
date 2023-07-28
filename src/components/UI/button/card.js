import React from "react";
import "./card.css";
import plus from '../../../Assets/img/plus.png'
const Card1 = ({ name, image, title,button,linki }) => {
  return (
    <div className="cardnew">
    <div className="card1">
      <div className="card1-image">
        {" "}
        <img className="imgcard" src={image} alt={name} />
      </div>
      <div className="card1-description">
       
  <strong><h4 className="text-body1">
          {name}
          <div><a href={linki}  ><button className="explorebtn12"><span><img src={plus} width={"16px"} ></img> </span>{button}</button></a></div>
        </h4></strong>
       
        <p className="text-title1 ">{title}</p>
      </div>
     
    </div>
    </div>
  );
};

export default Card1;
