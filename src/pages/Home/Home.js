import React from "react";

import backendAPI from "../../api/backendAPI";
import savesbucket from "../../Assets/img/savesbucket.png";
import '../../components/UI/button/button.css'
function Home() {
  
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
          {loading && <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
           
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">Saving..!</div>
        </div>
</div>}
        </div>
        <form className="form form-row" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="form-group has-default bmd-form-group ">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="form-group bmd-form-group">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="exampleInput1"
                  placeholder="Phone Number"
                />
              </div>
              <div className="button1">
                <button type="submit" className="explorebtn2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="container">
        <button className="btn btn-primary" onClick={handleDownloadVcard}>
          Download Vcard
        </button>
      </div> */}

      {/* Footer */}
      <div className="futa" style={{ height: "430px" }}></div>
    </>
  );
}

export default Home;
