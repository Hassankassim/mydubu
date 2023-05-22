import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "../../styles.css";
import dubulogo from "../../Assets/img/dubu icon.png";
import backendAPI from "../../api/backendAPI";
import savesbucket from "../../Assets/img/savesbucket.png";
import downloadbtn1 from "../../Assets/img/icons8-download-64.png";
import icon1 from "../../Assets/img/icons8-congratulation-94.png"


function Download() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const postDetails = async () => {
      try {
        setLoading(true);
        const { data } = await backendAPI.post("", { name, phone });
        if (data.success) {
          console.log(`${data.name} is Saved. Done!`);
          setData(`${data.name} is Saved. Done! `);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    postDetails();
  };
  const handleDownloadVcard = () => {
    window.location.href = "https://bucket-egxu.onrender.com/api/v1/download";
  };

  return (
    <>
     

      {/* Main content */}
      <div className="container mt-5">
        <div className="title">
          <h3>SavesBucket</h3>
          <p className="pa1">Congratulation For Using Our DubuBucket! <span><img width="52px" src={icon1} alt="" /></span> </p>

          <div className="image-container1">
            <img
              width={"120px"}
              src={savesbucket}
              alt="Description of the image"
            />
          </div>
        </div>
        <div className="m-3 text-success">{data && <h5>{data}</h5>}</div>
        <div className="m-3 text-warning">
          {loading && <h5 className="h5">Saving....</h5>}
        </div>
      </div>
      <div className="container">
      <div className="row">
      <div className="c" >
       <div id="downloadbtn2" > <button id="downloadbtn"
        
          className="btn btn-primary"
          onClick={handleDownloadVcard}
        >
            <img
            className="ico1"
              width={"30px"}
              src={downloadbtn1}
              alt="Description of the image"
            />
           Download Vcard
        </button>
        </div>
        </div>
      </div>
        <p className="pa1">Enjoy It!</p>
      </div>

      {/* Footer */}
      <div className="futa" style={{ height: "430px" }}></div>
    </>
  );
}

export default Download;
