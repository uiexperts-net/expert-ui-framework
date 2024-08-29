import React from 'react';

export interface ButtonGroupProps {
  buttons: string[];
  onClick: (button: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, onClick }) => {
  return (
    <div className="btn-group">
      {buttons.map((button, index) => (
        <button
          key={index}
          type="button"
          className="btn btn-primary"
          onClick={() => onClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
