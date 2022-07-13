import { ComponentType, PropsWithChildren } from 'react';

import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

import { ClientError, ClientErrorCode } from 'src/http/client-error';

import ErrorPanel from './ErrorPanel';
import Button from '@/components/button';

export const GlobalErrorFallback: ComponentType<
  PropsWithChildren<FallbackProps>
> = ({ error }) => {
  const clientError = error as ClientError;

  const renderButtons = (): JSX.Element => {
    switch (clientError?.code) {
      case ClientErrorCode.UNAUTHENTICATED:
      case ClientErrorCode.UNAUTHORIZED:
      case ClientErrorCode.NO_PROJECT_ASSIGNED:
        return (
          <Button aria-label="logout" onClick={() => {}}>
            Go back to login page
          </Button>
        );
      case ClientErrorCode.UNEXPECTED:
      default:
        return (
          <>
            <Button aria-label="home" style={{ whiteSpace: 'nowrap' }}>
              Go back to home
            </Button>
            <Button
              aria-label="logout"
              onClick={() => {}}
              style={{ whiteSpace: 'nowrap' }}
            >
              Go back to login page
            </Button>
          </>
        );
    }
  };

  return (
    <Container>
      <ErrorPanel title={clientError.name} subTitle1={clientError.message}>
        {renderButtons()}
      </ErrorPanel>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem;
`;
