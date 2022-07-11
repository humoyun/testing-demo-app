import { useState, SyntheticEvent } from 'react';

import { Flexbox } from '@/components/alignments';
import Button from '@/components/button';
import TextInput from '@/components/text-input';

const Subscription = (): JSX.Element => {
  const [value, setValue] = useState();
  const handleClick = () => {};
  const handleChange = (e: SyntheticEvent) => {
    // setValue(e.currentTarget);
  };

  return (
    <div>
      <span>some heder</span>

      <Flexbox>
        <TextInput
          value={value}
          onChange={handleChange}
          disabled={false}
          placeholder="Enter search..."
        />
      </Flexbox>
      {/* for giving some option to the subscribee */}
      <input type="checkbox" />

      <Button
        style={{ marginLeft: 10 }}
        onClick={handleClick}
        // loading={true}
        // disabled={true}
      >
        Search
      </Button>
    </div>
  );
};

export default Subscription;
