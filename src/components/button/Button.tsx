import { PropsWithChildren, MouseEventHandler, CSSProperties } from 'react';

import styled from 'styled-components';

type Props = PropsWithChildren<{
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}>;

const Button = ({
  children,
  loading,
  disabled,
  onClick,
  style = {},
}: Props): JSX.Element => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      $loading={loading}
      data-testid="custom-button"
      area-label="custom button"
      style={{ ...style }}
    >
      <span>{loading ? 'Loading...' : children}</span>
    </StyledButton>
  );
};

type ButtonProps = { $disabled?: boolean; $loading?: boolean };

const StyledButton = styled.button<ButtonProps>(({ disabled, $loading }) => ({
  minWidth: 100,
  height: 40,
  borderRadius: 5,
  outline: 'none',
  border: 'none',
  fontSize: 14,
  backgroundColor: disabled || $loading ? '#70ffd1' : '#36fabb',
  color: '#fff',
  cursor: 'pointer',
  '&:active': {
    backgroundColor: !disabled ? '#70ffd1' : '',
  },
}));

export default Button;
