import { useState, ChangeEvent } from 'react';

import { Flexbox } from 'src/components/alignments';
import Button from 'src/components/button';
import TextInput from 'src/components/text-input';
import PostList from 'src/features/posts';

const Home = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');

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
      <PostList />
    </div>
  );
};

export default Home;
