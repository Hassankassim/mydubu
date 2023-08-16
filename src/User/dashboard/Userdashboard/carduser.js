import React from "react";
import "./carduser.css";
import nextico from '../../../Assets/img/next.png'

const Card1 = ({ name, image, title,button,linki,onclick }) => {
  return (
    <div className="cardnew">
    <a href={linki}   ><div className="card1">
<<<<<<< HEAD
      <div className="card1-image4">
=======
      <div className="card1-image">
>>>>>>> 7f529d5fa8015fade5479453ae8f78dcec20d325
        {" "}
        <img className="imgcard" src={image} alt={name} />
      </div>
      <div className="card1-description  gara">
       
  <strong><h4 className="text-body1 gara">
          {name}
          <div><a href={linki}  ><div  className="explorebtn123"><span><img src={nextico} width={"20px"} ></img> </span>{button}</div></a></div>
        </h4></strong>
       
        <p className="text-title1 gara">{title}</p>
      </div>
     
    </div></a>
    </div>
  );
};

export default Card1;
