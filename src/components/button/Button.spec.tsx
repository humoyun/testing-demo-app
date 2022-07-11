import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './';

const ButtonText = 'Search';

type SetupProps = {
  text?: string;
  loading?: boolean;
  disabled?: boolean;
};

const setup = ({ text = ButtonText, loading, disabled }: SetupProps) => {
  const onClickMock = jest.fn();
  const utils = render(
    <Button onClick={onClickMock} loading={loading} disabled={disabled}>
      {text}
    </Button>
  );

  return {
    button: utils.getByTestId('custom-button'),
    onClickMock,
    ...utils,
  };
};

describe('common unit test cases for Button component', () => {
  test('renders Button and checks basic functionality', async () => {
    const { button, onClickMock } = setup({});

    expect(button).toHaveTextContent(ButtonText);
    expect(button).not.toHaveAttribute('disabled');

    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('renders Button with loading state', async () => {
    const { button, onClickMock } = setup({ loading: true });

    // below is a good example of not needed assertion
    // expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Loading...');
    expect(button).toHaveAttribute('disabled');

    await userEvent.click(button);
    // should not have been called
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test('renders Button with disabled state', async () => {
    const { button, onClickMock } = setup({ disabled: true });

    expect(button).toHaveTextContent(ButtonText);
    expect(button).toHaveAttribute('disabled');

    await userEvent.click(button);
    // should not have been called
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
