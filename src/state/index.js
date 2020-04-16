import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';


const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : n => n;


const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk), devTools)
);


export default store;