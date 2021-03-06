import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class PopularShows extends Component {
  componentWillMount() {
    this.props.popularShows();
  }

  static navigationOptions = {
    title: 'Popular Shows',
  };

  render() {
    return (
      <FlatList
        data={this.props.shows}
        renderItem={(row) => <ListItem item={row.item} />}
      />
    );
  }
}

PopularShows.propTypes = {
  popularShows: PropTypes.func.isRequired,
  shows: PropTypes.array,
};

export default PopularShows;
