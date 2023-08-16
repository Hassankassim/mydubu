import React from 'react';
import './bucket.css'; // Import the unique CSS file

const Card = ({name,number,linki2 }) => {
  return (
    <div className="card7">
      <div className="top-section">
        <div className="border"></div>
        <div className="icons">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="svg">
              {/* Add your SVG path here */}
            </svg>
          </div>
          <div className="social-media">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="svg">
              {/* Add your SVG path here */}
            </svg>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* Add your SVG path here */}
            </svg>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              {/* Add your SVG path here */}
            </svg>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        
        <span className="title3">{name}</span>
        <div className="row ">
          <div className="item">
            <span className="big-text">2626</span>
            <span className="regular-text">member saved</span>
          </div>
          <div className="item">
            
            <span className="big-text">100%</span>
            <span className="regular-text">active</span>
          </div>
          <a className='btnj' href={linki2}>  <button className='joinbtn bg-primary ' >join</button></a>
        
          <div className="item">
          
            <span className="big-text">38,631</span>
            <span className="regular-text">Expected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
