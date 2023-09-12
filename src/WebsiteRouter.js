import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./pages/Download/Download";
import App from "./App";
import Home from "./pages/Home/Home";

import Landing from "./pages/landing/landing";

import Registration from "./pages/Registration/Registration";
import Login from "./pages/Registration/Login";

import Learnmore from "./components/UI/button/Learnmore";
import Createacc from "./pages/Explore/Createacc";
import Bucket from "./User/dashboard/Userdashboard/Bucket";

import Joiningbucket from "./components/UI/button/joinbucket";
import ChangeName from "./pages/ChangeName/ChangeName";
// import Userdashboard from "./User/dashboard/Userdashboard/Userdashboard";
import Userdashboard from "./User/dashboard/Userdashboard/Userdashboard";
import Profile from "./User/dashboard/Userdashboard/Profile";


import NewBucket from "./User/dashboard/newbucket";


import Comment from './pages/Testimony/Comment'
const WebsiteRouter = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/Learnmore" element={<Learnmore />} />
        <Route path="/landing" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Bucket" element={<Bucket />} />
        <Route path="/Login" element={<Login />} />
        
        {/* <Route path="/Userdashboard" element={<Userdashboard />} /> */}
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Createacc" element={<Createacc />} />
        <Route path="/Joiningbucket" element={<Joiningbucket />} />
        <Route path="/ChangeName" element={<ChangeName />} />
        <Route path="/Newbucket" element={<NewBucket />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </Router>
  );
};

export default WebsiteRouter;
