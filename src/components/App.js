import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoremIpsum from './components/LoremIpsum';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <LoremIpsum />
      </div>
    </Provider>
  );
};

export default App;
