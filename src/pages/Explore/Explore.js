import { ButtonToolbar } from "react-bootstrap";
import "./explore.css";
// import usersimg from '../../Assets/img/users.png'
import Navbar from '../../components/Navbar'
function Explore() {
  return (
 <>
 <Navbar/>
    <div className="container67">
   
        <br />
        <br />
        <h5>
          <strong className="h5 black">ABOUT US</strong>
        </h5>
        <div id="cardshadow" >
          {/* <img width={'100%'} src={usersimg}></img> */}
          <br />
        <p>1003 using Dubu </p>
        </div>
        <h5 className="black"> <strong>Connect. Save. Share. Welcome to Dubu!</strong></h5> 
        <br />
        <br />
      </div>
      </>
  
  );
}

export default Explore;
