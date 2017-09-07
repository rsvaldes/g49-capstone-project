import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Root } from './config/router';

export default class App extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
