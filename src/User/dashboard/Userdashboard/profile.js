<<<<<<< HEAD
import React from "react";
import "./Userdashboard.css";
import profilecover from "../../../Assets/img/profile cover.jpg";
import Userfooter from "../../dashboard/Userfooter";
import profileico from "../../../Assets/img/onlyprofile.png";
function Profile() {
  return (
    <div>
      {" "}
      <div className="card512">
        <div className="card55 image-with-overlay">
          <div className="content">
            <span className="title1 gara">
              Umepitia changamoto ya kushindwa kusave number za watu wengi kwa
              urahisi
            </span>

            <p className="desc ultra">"Je!, Umejaribu Dubu!"</p>
          </div>
        </div>
        <div className="container61">
          {" "}
          <a href="\Explore">
            <div className="container622">
              <img width={"62px"} src={profileico}></img>
            </div>
          </a>
        </div>
      </div>
      <div className="namep black"><h2>Sani</h2>
      <p>hassankassim553@gmail.com</p></div>
      <div className="row">
        <p>lorem</p>

      </div>
      <Userfooter />{" "}
    </div>
  );
}

export default Profile;
=======
import React from 'react'
import "./Userdashboard.css";
import Userfooter from "../../dashboard/Userfooter"
import profileico from '../../../Assets/img/onlyprofile.png'
function Profile() {
  return (
    <div> <div className="card51">
    <div className="card55 image-with-overlay">
      <div className="content">
        <span className="title1 gara">
          Umepitia changamoto ya kushindwa kusave number za watu wengi kwa
          urahisi
        </span>

        <p className="desc ultra">"Je!, Umejaribu Dubu!"</p>
       
      </div>
    </div>
    <div className="container61">
          {" "}
          <a href="\Explore">
            <div className="container622"><img width={"62px"} src={profileico}></img></div>
          </a>
        </div>
  </div>
  <Userfooter /> </div>
  )
}

export default Profile
>>>>>>> 7f529d5fa8015fade5479453ae8f78dcec20d325
