import { useState, ChangeEvent } from 'react';

import { Flexbox } from '@/components/alignments';
import Button from '@/components/button';
import TextInput from '@/components/text-input';

const Search = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
        <Button style={{ marginLeft: 10 }}>Search</Button>
      </Flexbox>
    </div>
  );
};

export default Search;
