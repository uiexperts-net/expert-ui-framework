// Surface.tsx

import React from 'react';

export interface SurfaceProps {
  color?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const Surface: React.FC<SurfaceProps> = ({ color = 'white', width = '100%', height = '100%', children }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: '4px', // Optional: adds rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a shadow effect
      }}
    >
      {children}
    </div>
  );
};

export default Surface;
