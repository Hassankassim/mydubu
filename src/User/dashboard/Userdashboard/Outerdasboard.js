import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import Bucket from './Bucket';   // Import the Bucket component
import Explore from './Explore'; // Renamed Testing3 to Explore
import Create from './Create';   // Import the Create compo
import Landing from '../../../pages/landing/landing';


export default function Outerdashboard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Box sx={{ pb: 7 }}>
        <CssBaseline />

        {/* Render tab content based on the active tab */}
        {activeTab === 0 && <Bucket />}  {/* Render Bucket component for "Home" tab */}
        {activeTab === 1 && <Create />}  {/* Render Create component for "Create" tab */}
        {activeTab === 2 && <Landing />} {/* Render Explore component for "Explore" tab */}
        
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={activeTab}
            onChange={(event, newValue) => {
              setActiveTab(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Create" icon={<CreateIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
            
            {/* Add more tabs if needed */}
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
