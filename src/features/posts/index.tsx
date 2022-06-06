import { useState, useEffect } from 'react';

import { Flexbox } from 'src/components/alignments';
import baseApi from 'src/http';

import Post, { PostScheme } from './Post';

const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<PostScheme[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await baseApi.get<PostScheme[]>({ path: 'posts' });

      setPosts(resp);
    };

    fetchPosts();
  }, []);

  return (
    <Flexbox direction="column" style={{ rowGap: 10, marginBottom: 20 }}>
      {posts.map(post => (
        <Post key={post.id} data={post}></Post>
      ))}
    </Flexbox>
  );
};

export default PostList;
