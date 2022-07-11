import { Suspense, useEffect } from 'react';

import styled from 'styled-components';

import PostList from 'src/features/posts';
import { fetchPostsAsync } from 'src/features/posts/postsSlice';
import Search from 'src/features/search';
import { useAppDispatch } from 'src/state/hooks';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  return (
    <Container>
      <Search style={{ marginBottom: 20 }} />
      <div>List of posts</div>
      <Suspense>
        <PostList />
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

export default Home;
