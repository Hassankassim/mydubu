import React from 'react';
import './Createacc.css'
import Navbar from '../../components/Navbar'
const Createacc = () => {
  return (
    <>
   
        <div className="cardacc">
      <div className="headeracc">
        <span className="icon">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <p className="alert">Kwenye Dubu!</p>
      </div>

      <p className="message">
        inatakubidi ufungue account ili kupata hii huduma
      </p>

      <div className="actions">
        <a className="read" href="\Registration">
        Tengeneza account
        </a>

        <a className="mark-as-read" href="\Landing">
      Pita angalia
        </a>
      </div>
    </div>
    </>

  );
};

export default Createacc;
