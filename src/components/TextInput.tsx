import { ChangeEvent } from 'react';

import styled from 'styled-components';

type InputType = 'text' | 'password' | '';

type Props = {
  value?: string;
  type?: InputType;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const TextInput = ({
  value,
  type = 'text',
  placeholder = '',
  onChange,
  disabled,
}: Props): JSX.Element => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    ></StyledInput>
  );
};

const StyledInput = styled.input(() => ({
  width: '100%',
  fontSize: 14,
  borderRadius: 5,
  outline: 'none',
  padding: `11px 14px`,
  border: `1px solid #ccc`,
  marginBottom: 5,
}));

export default TextInput;
