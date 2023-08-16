import React from "react";
import Bucket from "./Bucket";
import './bucket.css'
import NavbarExample from "../../Navbar";

function Joinbucket() {
  return (
    <>
      <NavbarExample />
      <div className="container">
        <div id="joingbucket">
<<<<<<< HEAD
          <h5 className="text-center gara">Choose a bucket and join</h5>
          <div className="bucket-container">
            <div className="bucket-pair">
              <Bucket linki2='/Uni' name="uni-bucket" title="Join to the bucket" linki="#" />
              <Bucket linki2="/Social" name="socio-bucket" title="Join to the bucket" linki="#" />
            </div>
            <div className="bucket-pair">
              <Bucket linki2="/Business" name="business-bucket" title="Join to the bucket" linki="#" svglink="{businesssvg}" />
              <Bucket linki2="/Student" name="student-bucket" title="Join to the bucket" linki="#" />
=======
          <h6 className="text-center b-4">Choose a bucket and join</h6>
          <div className="bucket-container">
            <div className="bucket-pair">
              <Bucket linki="/Business" name="uni-bucket" title="Join to the bucket" linki="#" />
              <Bucket name="socio-bucket" title="Join to the bucket" linki="#" />
            </div>
            <div className="bucket-pair">
              <Bucket name="business-bucket" title="Join to the bucket" linki="#" svglink="{businesssvg}" />
              <Bucket name="student-bucket" title="Join to the bucket" linki="#" />
>>>>>>> 7f529d5fa8015fade5479453ae8f78dcec20d325
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joinbucket;
