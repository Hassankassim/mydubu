import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./pages/Download/Download";
import App from "./App";
import Home from "./pages/Home/Home";
import Explore from "./User/dashboard/Userdashboard/Explore";
import Landing from "./pages/landing/landing";

import Registration from "./pages/Registration/Registration";
import Login from "./pages/Registration/Login";

import Learnmore from "./components/UI/button/Learnmore";
import Createacc from "./pages/Explore/Createacc";
import Bucket from "./User/dashboard/Userdashboard/Bucket";
import Userfooter from "./User/dashboard/Userfooter";
import Joiningbucket from "./components/UI/button/joinbucket";
import ChangeName from "./pages/ChangeName/ChangeName";
// import Userdashboard from "./User/dashboard/Userdashboard/Userdashboard";
import Userdashboard from "./User/dashboard/Userdashboard/Userdashboard";
import Profile from "./User/dashboard/Userdashboard/Profile";
import Business from './BUCKETS/Business'

import NewBucket from "./User/dashboard/newbucket";

import Social from './BUCKETS/Social'
import Student from './BUCKETS/Student'
import Userbucket from "./BUCKETS/Userbucket";
import Comment from './pages/Testimony/Comment'
const WebsiteRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/Learnmore" element={<Learnmore />} />
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Bucket" element={<Bucket />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Userfooter" element={<Userfooter />} />
        {/* <Route path="/Userdashboard" element={<Userdashboard />} /> */}
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/Createacc" element={<Createacc />} />
        <Route path="/Joiningbucket" element={<Joiningbucket />} />

        <Route path="/ChangeName" element={<ChangeName />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Userbucket" element={<Userbucket />} />
        
        <Route path="/Social" element={<Social />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Newbucket" element={<NewBucket />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </Router>
  );
};

export default WebsiteRouter;
