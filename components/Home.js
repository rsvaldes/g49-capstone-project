import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Image, Dimensions, StatusBar } from 'react-native';

const win = Dimensions.get('window');

class Home extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    <StatusBar hidden={true} />
    const { navigate } = this.props.navigation;
    return (
      <Image
        source={require('../images/bells_transparent.jpg')}
        style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to k9.Journey, Bella!
        </Text>
      <Button
       onPress={() => navigate('Options')}
       title="Enter"
       color="#FFFFFF"
       style={{ fontFamily: 'PingFangSC-Ultralight'}}
       accessibilityLabel="Learn more about this purple button"
       />
       <Button
        onPress={() => navigate('About')}
        title="About"
        color="#FFFFFF"
        style={{ fontFamily: 'PingFangSC-Ultralight'}}
        accessibilityLabel="Learn more about this purple button"
        />
       </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 40,
    marginTop:300,
    fontFamily: 'PingFangSC-Ultralight',
    textAlign:'center',
    color: '#FFFFFF'
  },
  button: {
    fontSize: 40,
    fontFamily: 'PingFangSC-Ultralight'
  }
});
export default Home;
