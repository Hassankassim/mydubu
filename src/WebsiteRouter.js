import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Download from './pages/Download/Download'
import App from './App'
const WebsiteRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/download' element={<Download/>}/>
        </Routes>
    </Router>
  )
}

export default WebsiteRouter
