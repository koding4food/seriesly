import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainer';

export default function Seriesly() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
