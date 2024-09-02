// src/App.tsx
import React from 'react';
import FloatingActionButton from './component/FloatingActionButton';

const App: React.FC = () => {
  const handleClick = () => {
    window.alert('Floating Action Button Clicked!');
  };

  return (
    <div>
      <FloatingActionButton
        icon="fas fa-plus"  // Pass the `icon` prop here
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
