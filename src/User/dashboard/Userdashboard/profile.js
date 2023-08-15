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