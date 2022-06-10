import { useState, useEffect, ChangeEvent, useReducer } from 'react';

import { PostScheme } from 'src/features/posts/Post';
import { postsSlice } from 'src/features/posts/postsSlice';
import baseApi from 'src/http';

import { Flexbox } from '@/components/alignments';
import Button from '@/components/button';
import TextInput from '@/components/text-input';

const Search = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  // const [, dispatch] = useReducer(postsSlice.reducer, []);
  // const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const fetchPosts = async () => {
    try {
      const resp = await baseApi.get<PostScheme[]>({ path: 'posts' });
      // dispatch({
      //   type: 'FETCH_POSTS',
      //   payload: resp,
      // });
    } catch (error) {}
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = () => {
    fetchPosts();
  };

  return (
    <div>
      <Flexbox>
        <TextInput
          value={search}
          onChange={handleChange}
          disabled={false}
          placeholder="Enter search..."
        />
        <Button style={{ marginLeft: 10 }} onClick={handleClick}>
          Search
        </Button>
      </Flexbox>
    </div>
  );
};

export default Search;
