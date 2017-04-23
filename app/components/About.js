import React, { Component } from 'react';
import { Text, View } from 'react-native';

class About extends Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <View>
        <Text>
          This is an awesome app!
          Nothing to watch here... Yet.
        </Text>
      </View>
    );
  }
}

export default About;
