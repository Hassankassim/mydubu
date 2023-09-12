import React from "react";
import Bucket from "./Bucket";
import "./bucket.css";
import NavbarExample from "../../Navbar";



function Joinbucket() {
  return (
    <>
      <NavbarExample linkico="/" />
      <div className="container">
        <div id="joingbucket">
          <h5 className="text-center gara">Choose a bucket and join</h5>
          <h6 className="red">services is not available for now. Enjoy others services</h6>
          <div className="bucket-container">
            <div className="bucket-pair">
              <Bucket
                linki2="/Uni"
                name="uni-bucket"
                title="Join to the bucket"
                linki="#"
              />
              <Bucket
                linki2="/Social"
                name="socio-bucket"
                title="Join to the bucket"
                linki="#"
              />
            </div>
            <div className="bucket-pair">
              <Bucket
                linki2="/Business"
                name="business-bucket"
                title="Join to the bucket"
                linki="#"
                svglink="{businesssvg}"
              />
              <Bucket
                linki2="/Student"
                name="student-bucket"
                title="Join to the bucket"
                linki="#"
              />
            </div>
            <p className="text-center blue">
          This services is not available for now,We will soon be there for new buckets
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joinbucket;
