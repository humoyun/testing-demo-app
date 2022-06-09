import { CSSProperties } from 'react';

import styled from 'styled-components';

type Props = {
  style?: CSSProperties;
  variant?: string;
};

const Typography = ({ style }: Props): JSX.Element => {
  return (
    <StyledSpan
      data-testid="custom-text-input"
      aria-label="custom-input"
      style={{ ...style }}
    />
  );
};

const StyledSpan = styled.span(() => ({
  fontSize: 14,
}));

export default Typography;
