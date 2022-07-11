import styled from 'styled-components';

import Subscription from 'src/features/subscription';

const Biz = (): JSX.Element => {
  return (
    <Container>
      <Subscription />
    </Container>
  );
};

export default Biz;

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;
