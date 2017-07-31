import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCqOHk0gZHrKAG2KD_Sqv4EgC4I9xLfGBs';

const App = () => <div>
    <SearchBar />
  </div>;

ReactDOM.render(<App />, document.querySelector('.container'));