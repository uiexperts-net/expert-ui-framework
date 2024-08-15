import React from 'react';

interface ZButtonProps {
  onClick: () => void;
  text: string;
}

export const ZButton: React.FC<ZButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};
