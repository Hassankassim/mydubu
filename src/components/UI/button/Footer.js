import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          {/* Content within the row */}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/profile.php?id=100092700969619">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/DubuBucket">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/dububucket/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
             
              
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href="#">
                  Dubu Bucket
                </a>
              </u>{" "}
             
            </p>
            <p className="h6">
              © All right Reversed_2023
              <a
                className="text-green ml-2"
                href="#"
                target="_blank"
              >
                DuBu
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
