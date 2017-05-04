import React, { Component, PropTypes } from 'react';
import { View, Button, Linking, Text } from 'react-native';
import { getAuthUrl } from '../services/traktApi';

const propTypes = {
  mediaByType: PropTypes.object.isRequired,
  updateSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
  requestAccessToken: PropTypes.func.isRequired,
};

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    Linking.addEventListener('url', (response) => this.handleDeepLink(response));
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', (response) => this.handleDeepLink(response));
  }

  handleDeepLink(response) {
    this.props.requestAccessToken(response);
  }

  triggerLogin() {
    Linking.openURL(getAuthUrl());
  }

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
        <Button
          onPress={() => this.triggerLogin()}
          title="Login with Trakt"
          color="#841584"
          accessibilityLabel="Login with Trakt"
        />
        {this.props.auth.trakt && <Text>Congrats! You are logged in. Your session expires in: {this.props.auth.trakt.expires_in}</Text> }
      </View>
    );
  }
}

App.propTypes = propTypes;

export default App;
