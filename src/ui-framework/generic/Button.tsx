// src/ui-framework/generic/Button.tsx

import React from 'react';

// Define a type for Button properties
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add any additional props specific to your generic button here
  // For example, you can define custom styles or additional attributes
}

// Define the Generic Button component
export const ZButton: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} />
  );
};
