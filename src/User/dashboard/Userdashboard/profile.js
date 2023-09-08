import React from "react";
import "./Userdashboard.css";
import plus2 from '../../../Assets/img/plus4.png'
import NavbarExample from "../../../components/Navbar";

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
          <hr></hr>
          <div id="viewbtn"><button className="btn bg-primary">VIEW YOUR BUCKETS</button></div>
        </div>
        <div className=" pro2 mb-5 ">
          <h4 className="blue text-center">INTERESTED</h4>




<ul>
  <li className="interetedlist">games</li>
  <li className="interetedlist1">movies</li>
  <li className="interetedlist1">Academic</li>
  <li className="interetedlist2">Social</li>
  <li  className="blue" ><a href="#">add<span><img width={'16px'} src={plus2}></img ></span></a></li>

</ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
