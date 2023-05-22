import React from "react";
import image1 from "../../Assets/img/landing pic.png";
import cardimage1 from "../../Assets/img/icons8-user-shield-144.png";
import cardimage2 from "../../Assets/img/icons8-contacts-240.png";
import cardimage3 from "../../Assets/img/icons8-download-64.png";
import cardimage4 from "../../Assets/img/icons8-save-256.png";
import "./landing.css";
import Subscribe from "../../components/Form/Subscribe";

import Card1 from "../../components/UI/button/card";

function Landing() {
  return (
    <div>
      {" "}  
      <div className="container6">
        <div className="card">
          <div className="image">
            <img
              className="image"
              src={image1}
              alt="Description of the image"
            />
          </div>
          <div className="content">
            <a href="#">
              <span className="title1">
                Connect with Ease. Save with Confidence. Dubu Has You Covered
              </span>
            </a>

            <p className="desc">
              Dubu simplifies contact management by providing a user-friendly
              platform for easy saving, organization, and sharing of contacts
              with friends, family, colleagues, or acquaintances, while
              prioritizing privacy and security.
            </p>

            <a href="\Explore" className="explorebtn">
              Find out more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="card6">
        <Card1
          className="image"
          name="Secure and Hassle-Free  "
          image={cardimage1}
          title=""
        />
        <Card1
          className="image"
          name="Unlimited contact Storage"
          image={cardimage2}
          title=""
        />
      </div>
      <div className="card6">
        <Card1
          className="image"
          name="Effortless Importing"
          image={cardimage3}
          title=""
        />
        <Card1
          className="image"
          name="Experience Easy
Contact Management"
          image={cardimage4}
          title=""
        />
      </div>
<Subscribe />
    </div>
  );
}

export default Landing;
