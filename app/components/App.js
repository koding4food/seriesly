import React, { Component, PropTypes } from 'react';
import { View, Button } from 'react-native';
import PopularShows from '../containers/PopularShowsContainer';

const propTypes = {
  mediaByType: PropTypes.object.isRequired,
  updateSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

class App extends Component {

  constructor(props) {
    super(props);
    this.onAboutButtonPress = this.onAboutButtonPress.bind(this);
  }

  onAboutButtonPress() {
      const { navigate } = this.props.navigation;
      navigate('About');
  }
  

  render() {
    return (
      <View>
        <PopularShows />
        <Button
          onPress={this.onAboutButtonPress}
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
