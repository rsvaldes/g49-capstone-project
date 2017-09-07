import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView } from 'react-native';


class FureverHomes extends React.Component {
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
        <WebView
          source={{uri: 'http://furever-homes.surge.sh'}}
        />
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

export default FureverHomes;
