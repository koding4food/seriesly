import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createRouterReducer from './reducers/router';

export default function initStore(routerConfig) {
  const nav = createRouterReducer(routerConfig);
  return createStore(combineReducers({...reducers, nav}), applyMiddleware(thunk));
}
