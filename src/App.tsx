import { Outlet } from 'react-router-dom';

import { Flexbox } from 'src/components/alignments';
import Header from 'src/features/header';

const App = (): JSX.Element => {
  return (
    <Flexbox className="App" align="center" direction="column">
      <Header></Header>
      <Outlet />
    </Flexbox>
  );
};

export default App;
