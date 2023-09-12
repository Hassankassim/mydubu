import React from "react";
import backendAPI from "../../api/backendAPI";
import "../../components/UI/button/button.css";
import Navbar from '../../components/Navbar'

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
          setData(<span className="blue-text">{`${data.name} is Saved. Done!`}</span>);
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
    <Navbar linkico="/" />
      <div className="navcomp">
        {/* Main content */}
        <div className="container mt-5">
          <div className="title">
            <div className="image-container1">
              <h2 className="ChangedName">CONTACTS BUCKET</h2>
            </div>
          </div>
          <div className="feedback1">
          <div className="m-3 text-success">{data && <h5>{data}</h5>}</div>
          <div className="m-3 text-warning">
            {loading && (
              <div id="page">
                <div id="container">
                  <div id="ring"></div>
                  <div id="ring"></div>

                  <div id="ring"></div>
                  <div id="ring"></div>
                  <div id="h3">Saving..!</div>
                </div>
              </div>
            )}
          </div>
          </div>
          
          <div id="card45" className="card card12">
            <form className="form form-row" onSubmit={handleSubmit}>
              <div id="row1" className="row ">
                <div className="col-lg-12 col-sm-6">
                  <div className="form-group has-default bmd-form-group ">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-6 ">
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
        </div>
        {/* <div className="container">
        <button className="btn btn-primary" onClick={handleDownloadVcard}>
          Download Vcard
        </button>
      </div> */}

        {/* Footer */}
      
      </div>
    
    </>
  );
}

export default Home;
