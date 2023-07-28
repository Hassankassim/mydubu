import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bucket from "./Bucket";
function Joinbucket() {
  return (
    <div className=" containerb container-fluid">
      <div id="joingbucket">
        <h6 className="text-center b-4">Choose a bucket and join</h6>
        <div className="row">
          <div className="col-6">
            <Bucket name="uni-bucket" title="join to the bucket" linki="#" />
          </div>
          <div className="col-6">
            {" "}
            <Bucket
              name="socio-bucket"
              title="join to the bucket"
              linki="#"
            />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {" "}
            <Bucket
              name="business-bucket"
              title="join to the bucket"
              linki="#"
            />{" "}
          </div>
          <div className="col-6">
            {" "}
            <Bucket
              name="student-bucket"
              title="join to the bucket hghfghnvcjhvhgjbj"
              linki="#"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joinbucket;
