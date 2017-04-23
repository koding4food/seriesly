import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PopularShows from '../containers/PopularShowsContainer';

const propTypes = {
  mediaByType: PropTypes.object.isRequired,
  updateSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

class App extends Component {
  render() {
    return (
      <PopularShows />
    );
  }
}

App.propTypes = propTypes;

export default App;
