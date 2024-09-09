// src/App.tsx

import React from 'react';
import Navigation from './component/Navigation'; // Adjust the import path if needed

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation
        links={[
          { label: 'Home', href: '/home' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeLink="/home" // Adjust as needed
        onLinkClick={() => {}}
      />
      {/* Other components */}
    </div>
  );
}

export default App;
