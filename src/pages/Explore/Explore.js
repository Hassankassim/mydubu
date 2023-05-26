


import { ButtonToolbar } from "react-bootstrap";
import image1 from "../../Assets/img/save1.png";
import image2 from "../../Assets/img/savepc.png";

function Explore() {
  

  return (
    <div div className="container">
      <div>
        <h5><strong>About Backet</strong></h5>

        <div className="container5">
          <img
            id="img1"
            width={"120px"}
            src={image1}
            alt="Description of the image"
          />
          <img
            id="img2"
            width={"120px"}
            src={image2}
            alt="Description of the image"
          />
        </div>
      </div>
      
      <div className="container3">
        <strong>1st Step:</strong> Write Your Name and Number Then Click Save
        <strong>2nd Step:</strong> Wait for Download link When The Bucket is Full
      </div>
      <div className="btnus">
        
       
      </div>
     
       
          <div >
          <a href="/Registration" > <div className="container6"> <button className="submit2">Register</button></div></a>
            <br />
            <br />
           <h5><strong>ABOUT US</strong></h5>
            <div ClassName="container6">
              At Dubu, we are passionate about simplifying contact management
              and enhancing social networking experiences. Our mission is to
              provide a seamless solution that revolutionizes the way people
              save, organize, and share their contact information.
              <br />
              <br /> In today's fast-paced digital world, maintaining an
              extensive network of contacts can be challenging. We recognized
              the need for a more efficient and convenient method of contact
              saving, and that's where Dubu comes in. Dubu offers a
              user-friendly platform that allows individuals from different
              locations to securely store their phone numbers and names in one
              centralized location We understand the importance of privacy and
              security. That's why we prioritize the confidentiality of your
              data. With Dubu, you have control over your information and can
              adjust privacy settings to determine who can access and download
              your vCard. Dubu is more than just a contact saving platform; 
              <br/> 
              <strong>
              Connect. Save.
              Share. Welcome to Dubu!
              </strong>
            </div>
       
    
      </div>
    </div>
  );
}

export default Explore;
