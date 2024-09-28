import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 


const conformation: React.FC = () => {
 
  const handleHomeClick = () => {
    console.log('Home button clicked');

  };

  const handleGroupClick = () => {
    console.log('Group button clicked');
   
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side - Logo and Title */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="logo" sx={{ p: 0 }}>
              <img src="/assets/logo.png" alt="Contact Manager Logo" style={{ width: 28, height: 29 }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
              Contact Manager
            </Typography>
          </div>

          {/* Right side - Two clickable image buttons */}
          <Box>
            {/* Home Button */}
            <IconButton color="inherit" aria-label="home" onClick={handleHomeClick}>
              <img src="/assets/home.png" alt="Home" style={{ width: 24, height: 24 }} />
            </IconButton>

            {/* Group Button */}
            <IconButton color="inherit" aria-label="group" onClick={handleGroupClick}>
              <img src="/assets/gmail group.jpg" alt="Group" style={{ width: 24, height: 24 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    
    </>
  );
};

export default conformation;

