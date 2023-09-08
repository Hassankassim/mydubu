import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import NavbarExample from '../../../components/Navbar';
import Profile from './Profile'; // Renamed Testing to Profile
import Bucket from './Bucket';   // Renamed Testing2 to Bucket; // Renamed Testing3 to Explore
import Create from './Create';

// Import the Create component
export default function Userdashboard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <NavbarExample linkico="#" />
      <Box sx={{ pb: 7 }}>
        <CssBaseline />

        {/* Render tab content based on the active tab */}
        {activeTab === 0 && <Bucket />} {/* Render Profile component for "Profile" tab */}
        {activeTab === 1 && <Bucket />}  {/* Render Bucket component for "Bucket" tab */}
        {activeTab === 2 && <Profile />} {/* Render Explore component for "Explore" tab */}
        
        
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={activeTab}
            onChange={(event, newValue) => {
              setActiveTab(newValue);
            }}
          >
             <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Bucket" icon={<CreateIcon />} />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            {/* Add more tabs if needed */}
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
