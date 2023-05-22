import React from "react";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <div className="container6">
      <form className="form1">
        <span className="title">Subscribe to our Web App</span>
        <p className="description">
          Join the Dubu community and unlock exclusive benefits, gaining VIP
          access to supercharge your contact management and stay ahead of the
          game in networking
        </p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
          />
          <button className="" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
