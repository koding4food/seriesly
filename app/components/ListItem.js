import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';

let styles = {};

const ListItem = (props) => (
  <Text style={styles.row}>{props.item.title}</Text>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

styles = StyleSheet.create({
  row: {
    height: 50,
  }
});

export default ListItem;
