import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./pages/Download/Download";
import App from "./App";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Landing from "./pages/landing/landing";

import Registration from "./pages/Registration/Registration";
import Login from "./pages/Registration/Login";

import Learnmore from "./components/UI/button/Learnmore";
import Createacc from "./pages/Explore/Createacc";
import Bucket from "./components/UI/button/Bucket";
import Userfooter from "./User/dashboard/Userfooter";
import Joiningbucket from "./components/UI/button/joinbucket";
import ChangeName from "./pages/ChangeName/ChangeName";
import Userdashboard from "./User/dashboard/Userdashboard/Userdashboard";
import Profile from "./User/dashboard/Userdashboard/profile";
import Business from './BUCKETS/Business'
<<<<<<< HEAD
import NewBucket from "./User/dashboard/newbucket";
import Uni from './BUCKETS/Uni'
import Social from './BUCKETS/Social'
import Student from './BUCKETS/Student'
=======
import uni from './BUCKETS/uni'
import social from './BUCKETS/social'
import Student from './BUCKETS/student'
>>>>>>> 7f529d5fa8015fade5479453ae8f78dcec20d325
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
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/Createacc" element={<Createacc />} />
        <Route path="/Joiningbucket" element={<Joiningbucket />} />

        <Route path="/ChangeName" element={<ChangeName />} />
        <Route path="/Business" element={<Business />} />
<<<<<<< HEAD
        <Route path="/Uni" element={<Uni />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Newbucket" element={<NewBucket />} />
=======
        <Route path="/uni" element={<uni />} />
        <Route path="/social" element={<social />} />
        <Route path="/Student" element={<Student />} />
>>>>>>> 7f529d5fa8015fade5479453ae8f78dcec20d325
      </Routes>
    </Router>
  );
};

export default WebsiteRouter;
