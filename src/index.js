import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import MovieList from './components/MovieList';

// Redux imports
import { createStore } from 'redux';
import { Provider} from 'react-redux';

// Reducer import
import reducer from './reducers';

// The store
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
        <MovieList />
    </Router>
  </Provider>,
  document.getElementById('root')
);
