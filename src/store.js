import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import think from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
