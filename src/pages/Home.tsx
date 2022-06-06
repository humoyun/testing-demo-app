import { useEffect, useState, ChangeEvent } from 'react';

import { Flexbox } from 'src/components/Alignments';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';
import Post, { PostScheme } from 'src/features/posts/Post';
import baseApi from 'src/http';

const Home = (): JSX.Element => {
  const [posts, setPosts] = useState<PostScheme[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await baseApi.get<PostScheme[]>({ path: 'posts' });

      setPosts(resp);
    };

    fetchPosts();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div style={{ width: '60%' }}>
      This is Home
      <Flexbox>
        <TextInput
          value={search}
          onChange={handleChange}
          disabled={false}
          placeholder="Enter search..."
        />
        <Button>Search</Button>
      </Flexbox>
      <Flexbox direction="column" style={{ rowGap: 10, marginBottom: 20 }}>
        {posts.map(post => (
          <Post key={post.id} data={post}></Post>
        ))}
      </Flexbox>
    </div>
  );
};

export default Home;
