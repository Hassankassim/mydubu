import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./pages/Download/Download";
import App from "./App";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Landing from "./pages/landing/landing";
import Footer from "./components/UI/button/Footer";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Registration/Login";

import Navbar from "./components/Navbar";
import Learnmore from "./components/UI/button/Learnmore";
import Createacc from "./pages/Explore/Createacc";
import Bucket from "./components/UI/button/Bucket";
import Joiningbucket from "./components/UI/button/joinbucket";
import ChangeName from "./pages/ChangeName/ChangeName";
const WebsiteRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/Learnmore" element={<Learnmore />} />
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Bucket" element={<Bucket />} />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/Createacc" element={<Createacc />} />
        <Route path="/Joiningbucket" element={<Joiningbucket />} />
        <Route path="/ChangeName" element={<ChangeName />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default WebsiteRouter;
