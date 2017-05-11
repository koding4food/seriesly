import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createRouterReducer from './reducers/router';

export default function initStore(routerConfig) {
  const nav = createRouterReducer(routerConfig);
  return createStore(
    combineReducers({...reducers, nav}),
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
    )
  );
}
