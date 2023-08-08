import React from "react";

import cardimage1 from "../../Assets/img/whit bucket-50.png";
import cardimage2 from "../../Assets/img/whatsapp.png";
import cardimage3 from "../../Assets/img/vcf.png";

import "./landing.css";

import Card1 from "../../components/UI/button/card";

function Landing() {
  return (
    <div className="background1">
      <div className="card5">
        <div className="content">
          <span className="title1">
            Umepitia changamoto ya kushindwa kusave number za watu wengi kwa
            urahisi
          </span>

          <p className="desc">"Je!, Umejaribu Dubu!"</p>
          <a href="\Learnmore">
            <button className="explorebtn3">Jifunze Zaidi</button>
          </a>
        </div>
      </div>

      <div className="container61">
        {" "}
        <a href="\Explore">
          <button className="container62">1000+ users</button>
        </a>
      </div>
      <div className="cardnew1">
        <div className="">
          <Card1
            className="image"
            name="Tengeneza Bucket"
            image={cardimage1}
            title="Upate link-share "
            button="Create"
            linki="/Createacc"
          />
          <Card1
            className="image"
            name="Jiunge kwenye Bucket zilizopo"
            image={cardimage3}
            title="Bucket mbalimbali"
            button="Join"
            linki="/Joiningbucket"
          />
        </div>
        <div className="">
          <Card1
            className="image"
            name="tafuta number"
            image={cardimage2}
            title="makampuni mbalimbali"
            button="search"
            linki="/explore"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
