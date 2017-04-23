import React from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import initStore from './store';
import AppContainer from './containers/AppContainer';

const AppNavigator = StackNavigator({
  Home: { screen: AppContainer }
});

// @TODO: (Kelvin De Moya) - Refactor pending.
const AppWithNavigationState = (
  connect(state => ({ nav: state.nav }))((props) => (
    <AppNavigator navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
      })}
    />
  ))
);

export default function Seriesly() {
  const store = initStore(AppNavigator);

  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
