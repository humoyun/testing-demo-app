import { Flexbox } from 'src/components/alignments';

import Header from './features/header';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Flexbox className="App" align="center" direction="column">
      <Header></Header>
      <Home></Home>
    </Flexbox>
  );
};

export default App;
