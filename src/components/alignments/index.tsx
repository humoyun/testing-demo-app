import styled from 'styled-components';

type WrapOptions = 'nowrap' | 'wrap' | 'wrap-reverse';

type AlignOptions =
  | 'stretch'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'baseline';

type JustifyOptions =
  | 'flex-start'
  | 'start'
  | 'center'
  | 'flex-end'
  | 'end'
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

type DirectionOptions = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface FlexProps {
  wrap?: WrapOptions;
  align?: AlignOptions;
  justify?: JustifyOptions;
  direction?: DirectionOptions;
  style?: Record<string, unknown>;
}

export const Flexbox = styled.div<FlexProps>(
  ({ direction, wrap, align, justify, style }) => ({
    display: 'flex',
    flexDirection: direction || 'row',
    flexWrap: wrap || 'nowrap',
    alignItems: align || 'stretch',
    justifyContent: justify || 'flex-start',
    ...style,
  })
);

export const CenterAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: inherit;
`;

export const Vertical = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: auto;
`;
