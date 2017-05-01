import React from 'react';
import { Provider, connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import initStore from './store';
import AppContainer from './containers/AppContainer';
import About from './components/About';
import PopularShows from './containers/PopularShowsContainer';

const HomeNavigator = TabNavigator({
  Home: { screen: AppContainer },
  PopularShows: { screen: PopularShows },
  About: { screen: About },
});

// @TODO: (Kelvin De Moya) - Refactor pending.
const AppWithNavigationState = (
  connect(state => ({ nav: state.nav }))((props) => (
    <HomeNavigator navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
      })}
    />
  ))
);

export default function Seriesly() {
  const store = initStore(HomeNavigator);

  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
