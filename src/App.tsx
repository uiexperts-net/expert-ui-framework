// src/App.tsx
import React from 'react';
import Navbar from './components/conformation'; // Adjust the import path based on your folder structure
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <Container
        sx={{
          height: '100vh', // Full viewport height
          display: 'flex', // Flexbox for centering
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <img src="/assets/close.png" alt="check" style={{ width: 81, height: 75 }} />
          <Typography variant="h6" component="h1" gutterBottom>
          Group “name”  has not been created
          </Typography>
          <Box>
            <Typography variant="body1" color="textSecondary"></Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default App;
