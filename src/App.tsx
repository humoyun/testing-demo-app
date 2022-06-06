import { Flexbox } from './components/alignments';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Flexbox className="App" justify="center">
      <Home></Home>
    </Flexbox>
  );
};

export default App;
