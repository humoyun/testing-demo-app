import { useCallback, useEffect, useMemo } from 'react';

import { useSelector } from 'react-redux';

import { Flexbox } from 'src/components/alignments';
import { addPosts, fetchPostsAsync } from 'src/features/posts/postsSlice';
import baseApi from 'src/http';
import { useAppSelector } from 'src/state/hooks';
import { RootState } from 'src/state/store';

import Post, { PostScheme } from './Post';

const PostList = (): JSX.Element => {
  const posts = useAppSelector(state => state.posts);
  const filteredPosts = posts;

  return (
    <Flexbox direction="column" style={{ rowGap: 10, marginBottom: 20 }}>
      {posts.status === 'loading' && <div>LOADING</div>}

      {posts.list.map(post => (
        <Post key={post.id} data={post} />
      ))}
    </Flexbox>
  );
};

export default PostList;
