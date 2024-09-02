// src/component/FloatingActionButton.tsx
import React from 'react';

// Define the props including the `icon` and `onClick` properties
interface FloatingActionButtonProps {
  icon: string; // Add the `icon` property here
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      data-testid="fab-button"
      className="rounded-circle position-fixed btn btn-primary"
      onClick={onClick}
    >
      <i className={icon}></i> {/* Use the `icon` prop here */}
    </button>
  );
};

export default FloatingActionButton;
