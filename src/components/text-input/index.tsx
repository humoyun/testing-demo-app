import { ChangeEvent, CSSProperties } from 'react';

import styled from 'styled-components';

type InputType = 'text' | 'password' | '';

type Props = {
  value?: string;
  type?: InputType;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
};

const TextInput = ({
  value,
  type = 'text',
  placeholder = '',
  onChange,
  disabled,
  style,
}: Props): JSX.Element => {
  // const [val, setVal] = useState();
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      data-testid="custom-text-input"
      aria-label="custom-input"
      style={{ ...style }}
    />
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
