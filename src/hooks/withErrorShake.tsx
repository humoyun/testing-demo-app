import { ComponentType, PropsWithChildren } from 'react';

import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0%  { transform: translate(2px, 1px)   rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-2deg); }
  20% { transform: translate(-3px, 0px)  rotate(3deg);  }
  30% { transform: translate(0px, 2px)   rotate(0deg);  }
  40% { transform: translate(1px, -1px)  rotate(1deg);  }
  50% { transform: translate(-1px, 2px)  rotate(-1deg); }
  60% { transform: translate(-3px, 1px)  rotate(0deg);  }
  70% { transform: translate(2px, 1px)   rotate(-2deg); }
  80% { transform: translate(-1px, -1px) rotate(4deg);  }
  90% { transform: translate(2px, 2px)   rotate(0deg);  }
  100%{ transform: translate(1px, -2px)  rotate(-1deg); }
`;

export const ErrorShakeDiv = styled.div`
  &.error {
    animation: ${shake} 1s ease;
  }
`;

export function withErrorShake<T>(
  Component: ComponentType<PropsWithChildren<T>>
) {
  return (
    props: T & { shake: boolean; onShakeFinish: () => void }
  ): JSX.Element => {
    const { shake, onShakeFinish, ...rest } = props;

    return (
      <ErrorShakeDiv
        className={shake ? 'error' : ''}
        onAnimationEnd={onShakeFinish}
      >
        <Component {...(rest as unknown as T)} />
      </ErrorShakeDiv>
    );
  };
}
