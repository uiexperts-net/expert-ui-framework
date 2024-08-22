// src/App.tsx

import React from 'react';
import { ZButton } from './ui-framework/components/ZButton'; // Correct path to the ZButton component

const App: React.FC = () => {
  return (
    <div>
      <ZButton variant="contained" color="primary" onClick={() => alert('Button clicked!')}>
        Click Me
      </ZButton>
    </div>
  );
};

export default App;
