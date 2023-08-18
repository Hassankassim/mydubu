import React from "react";
import "./Userdashboard.css";
import NavbarExample from "../../../components/Navbar";
import Userfooter from "../Userfooter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileico from "../../../Assets/img/onlyprofile.png";
function Profile() {
  return (
    <div>
      {" "}
      <div className="card512">
        <div className="card55 image-with-overlay">
          <div className="content">
            <span className="title1 gara green">PROFILE</span>

            <p className=" green desc ultra ">"Karibu Dubu!"</p>
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
      <div className="namep black">
        <h2>Sani</h2>
        <p>hassankassim553@gmail.com</p>
      </div>
      <div className="row">
        <div className="bucketrow">
          <Row>
            <Col className="text-center green">BUCKET</Col>

            <Col className="text-center green">JOINED</Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h2>0</h2>
            </Col>

            <Col className="text-center ">
              <h2>0</h2>
            </Col>
          </Row>
        </div>
        <div className=" pro2 mb-5 ">
          <h4 className="blue">INTERETED</h4>
<ul>
  <li>games</li>
  <li>movies</li>
  <li>Academic</li>
  <li>Social</li>
  <li><span>add</span></li>

</ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
