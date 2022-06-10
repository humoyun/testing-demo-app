import { useState, useEffect } from 'react';

import baseApi from 'src/http';

import Post, { PostScheme } from './Post';
import { Flexbox } from '@/components/alignments';

const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<PostScheme[]>([]);

  return (
    <Flexbox direction="column" style={{ rowGap: 10, marginBottom: 20 }}>
      {posts.map(post => (
        <Post key={post.id} data={post}></Post>
      ))}
    </Flexbox>
  );
};

export default PostList;
