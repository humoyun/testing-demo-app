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
  onClick,
  style = {},
}: Props): JSX.Element => {
  return (
    <StyledButton
      disabled={true}
      type="button"
      onClick={onClick}
      style={{ ...style }}
    >
      <span>{loading ? 'Loading...' : children}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button(({ disabled }) => ({
  minWidth: 100,
  height: 40,
  borderRadius: 5,
  outline: 'none',
  border: 'none',
  fontSize: 14,
  backgroundColor: !disabled ? '#1176e9' : '#ccc',
  color: !disabled ? '#fff' : '',
  cursor: 'pointer',
  '&:active': {
    backgroundColor: !disabled ? '#2d87ee' : '',
  },
  '&.disabled': {
    backgroundColor: '#1176e9',
  },
}));

export default Button;
