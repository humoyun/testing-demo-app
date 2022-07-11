import { ReactNode } from 'react';

import styled from 'styled-components';

interface Props {
  title?: string;
  subTitle1?: string;
  subTitle2?: string;
  children?: ReactNode;
}

const ErrorPanel = ({
  title = 'Error',
  subTitle1 = 'Something went to wrong',
  subTitle2,
  children,
}: Props): JSX.Element => {
  return (
    <Container role="alert">
      <StyledPaper>
        <h3>{title}</h3>
        <Description>
          <p>{subTitle1}</p>
          {subTitle2 && <p>{subTitle2}</p>}
        </Description>
        {children}
      </StyledPaper>
    </Container>
  );
};

export default ErrorPanel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledPaper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 60rem;
  background-color: transparent;
  background-image: none;
`;
