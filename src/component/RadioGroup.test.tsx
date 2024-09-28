import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';

test('renders RadioGroup with options', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  render(<RadioGroup options={options} name="test" onChange={() => {}} />);

  options.forEach((option) => {
    expect(screen.getByLabelText(option)).toBeInTheDocument();
  });
});

test('calls onChange when an option is selected', () => {
  const handleChange = jest.fn();
  render(<RadioGroup options={['Option 1']} name="test" onChange={handleChange} />);

  fireEvent.click(screen.getByLabelText('Option 1'));
  expect(handleChange).toHaveBeenCalledWith('Option 1');
});
