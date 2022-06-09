import styled from 'styled-components';

import PostList from 'src/features/posts';
import Search from 'src/features/search';

const Home = (): JSX.Element => {
  return (
    <Container>
      This is Home
      <Search />
      <PostList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 60%;
  margin-top: 20px;
  flex-direction: column;
`;

export default Home;
