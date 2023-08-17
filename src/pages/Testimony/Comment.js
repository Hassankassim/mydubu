import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import ExploreIcon from '@mui/icons-material/Explore';
import Paper from '@mui/material/Paper';
import NavbarExample from '../../components/Navbar';
import Testing from './Testing';
import Testing2 from './Testing2';
import Testing3 from './Testing3'; // Import the Testing3 component

export default function FixedBottomNavigation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <NavbarExample />
      <Box sx={{ pb: 7 }}>
        <CssBaseline />

        {/* Render tab content based on the active tab */}
        {activeTab === 0 && <Testing />} {/* Render Testing component for "Profile" tab */}
        {activeTab === 1 && <Testing2 />} {/* Render Testing2 component for "Create" tab */}
        {activeTab === 2 && <Testing3 />} {/* Render Testing3 component for "Explore" tab */}
        
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={activeTab}
            onChange={(event, newValue) => {
              setActiveTab(newValue);
            }}
          >
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            <BottomNavigationAction label="Create" icon={<CreateIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
