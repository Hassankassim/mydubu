import React from 'react';
import './usercard.css'
const UserCard = () => {
  return (
    <div className="carduser">

      <div className="headeru">
        <div className="imageu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <g strokeWidth="0" id="SVGRepo_bgCarrier" />
            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
            <g id="SVGRepo_iconCarrier">
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#000000"
                d="M20 7L9.00004 18L3.99994 13"
              />
            </g>
          </svg>
        </div>
        <div className="content1">
          <span className="titleu">Accout validated</span>
          <p className="messageu">
          Welcome to Dubu – Your Digital Hub for Effortless Contact Management and Seamless Networking. Get ready to revolutionize how you connect, organize, and elevate your networking experience!
          </p>
        </div>
        <div className="actionsu">
          <button type="button" className="historyu">
            Create Bucket
          </button>
         <a href="Userdashboard"> <button  type="button" className="tracku">
          Home
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
