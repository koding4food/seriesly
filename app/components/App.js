import React, { Component, PropTypes } from 'react';
import { View, Button } from 'react-native';

const propTypes = {
  mediaByType: PropTypes.object.isRequired,
  updateSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          onPress={() => navigate('PopularShows')}
          title="Popular Shows"
          color="#841584"
          accessibilityLabel="Popular Shows"
        />
        <Button
          onPress={() => navigate('About')}
          title="About"
          color="#841584"
          accessibilityLabel="About"
        />
      </View>
    );
  }
}

App.propTypes = propTypes;

export default App;
