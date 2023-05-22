import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Download from './pages/Download/Download'
import App from './App'
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'
import Navbar from './components/Navbar'
import Landing from './pages/landing/landing'
import Footer from './components/UI/button/Footer'



const WebsiteRouter = () => {
  return (
    <Router>
      <Navbar/>

        <Routes>
          <Route path='/explore' element={<Explore/>} />
            <Route path='/' element={<Home/>}/>
            <Route path='/download' element={<Download/>}/>
            <Route path='/landing' element={<Landing/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default WebsiteRouter
