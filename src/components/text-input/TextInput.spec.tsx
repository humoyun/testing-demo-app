import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextInput from './';

/**
 * @see https://testing-library.com/docs/example-input-event
 */

const setup = () => {
  const onChange = jest.fn();
  const utils = render(<TextInput onChange={onChange} />);

  return {
    textInput: utils.getByTestId('custom-text-input'),
    onChange,
    ...utils,
  };
};

describe('tests TextInput components', () => {
  test('should render and can be typed into and called', () => {
    const { textInput, onChange } = setup();
    fireEvent.change(textInput, { target: { value: 'some text' } });
    // userEvent.type(textInput, 'some text');
    expect(screen.getByDisplayValue(/some text/)).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
  });

  test.todo('check disabled state');
});
