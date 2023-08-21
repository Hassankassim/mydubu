import React from "react";
import "./ChooseUs.css"; // Import your CSS file for styling

const ChooseUs = ({titlec,description}) => {
  return (
    <div className="choose-us">
    <div className="parentc">
      <div className="cardc">
        <div className="logoc">
          <span className="circlec circle1c"></span>
          <span className="circlec circle2c"></span>
          <span className="circlec circle3c"></span>
          <span className="circlec circle4c"></span>
          <span className="circlec circle5c">
           <h6 className="green">Dubu</h6>
          </span>
        </div>
        <div className="glassc"></div>
        <div className="contentc">
          <span className="titlec">{titlec}</span>
          <span className="textc">
            {description}
          </span>
        </div>
        <div className="bottomc">
          <div className="social-buttons-containerc">
          
           
           
          </div>
          <div className="view-morec">
            <button className="view-more-buttonc">View more</button>
            <svg
              className="svgc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChooseUs;
