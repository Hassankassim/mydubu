import React from 'react';
import './Registration.css'

const Registration = () => {
  return (
   <div className='container10'> <form className="form2">
   <p className="title2">Register</p>
   <p className="message">Sign Up now and get full access to our app.</p>
 
     <label>
       <input required placeholder="" type="text" className="input" />
       <span>Firstname</span>
     </label> 
   

   <label>
     <input required placeholder="" type="email" className="input" />
     <span>Email</span>
   </label>

   <label>
     <input required placeholder="" type="password" className="input" />
     <span>Password</span>
   </label>
   <label>
     <input required placeholder="" type="password" className="input" />
     <span>Confirm password</span>
   </label>
   <button className="submit2">Submit</button>
   <p className="signin">
     Already have an account? <a href="/Login">Sign in</a>
   </p>
 </form>
</div>  );
};

export default Registration;
