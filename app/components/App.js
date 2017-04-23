import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

let styles = {};

const propTypes = {
  mediaByType: PropTypes.object.isRequired,
  updateSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

class App extends Component {

  componentWillMount() {
    this.props.updateSearch('types', ['show']);
    // this.props.updateSearch('field', 'show');
    this.props.updateSearch('query', 'tron');
    setTimeout(() => {
      this.props.submitSearch();
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {JSON.stringify(this.props.mediaByType)}
        </Text>
      </View>
    );
  }
}

App.propTypes = propTypes;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App;
