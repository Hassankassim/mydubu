import React from 'react';
import './Userdashboard.css'; // Make sure to adjust the file path if needed

function Explorecard() {
  return (<>
  <div className="explore-container">
  <h5 className='gara '>Find a company contacts</h5>
    <div className='center'>
      
    <form className="explore-form">
      <input className="explore-input" type="text" placeholder="Name of a company" />
      <input className="explore-input" type="text" placeholder="Place..eg Arusha" />
      <textarea className="explore-textarea" placeholder="Enter Description"></textarea>
      <center>
        <button className="explore-button">Search</button>
      </center>
    </form>
    </div>
    </div>

    </>
  );
}

export default Explorecard;
