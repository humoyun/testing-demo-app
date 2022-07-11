import { useState, ChangeEvent, CSSProperties } from 'react';

import { Flexbox } from 'src/components/alignments';
import TextInput from 'src/components/text-input';
import { filterPosts } from 'src/features/posts/postsSlice';
import { useAppDispatch } from 'src/state/hooks';

type Props = {
  style?: CSSProperties;
};

const Search = ({ style }: Props): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    dispatch(filterPosts(search));
  };

  return (
    <Flexbox style={{ ...style }}>
      <TextInput
        value={search}
        onChange={handleChange}
        disabled={false}
        placeholder="Enter search..."
      />
    </Flexbox>
  );
};

export default Search;
