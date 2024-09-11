import React from 'react';
import Form from 'react-bootstrap/Form';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  return (
    <Form.Group>
      <Form.Label>Slider</Form.Label>
      <Form.Control
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </Form.Group>
  );
};

export default Slider;
