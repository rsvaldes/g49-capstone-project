import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Image, Dimensions, StatusBar } from 'react-native';

const win = Dimensions.get('window');

class About extends React.Component {
  // static navigationOptions = {
  //   header: null
  // }

  render() {
    <StatusBar hidden={true} />
    const { navigate } = this.props.navigation;
    return (
      <Image
        source={require('../images/bells_transparent.jpg')}
        style={styles.container}>
        <View style={styles.view}>
        <Text style={styles.text}>At k9.Journey, we believe that dogs are a part of the family. So why not treat them like one? k9.Journey allows you to keep track of vital components to your pet's health, such as sleeping and eating patterns. In addition to your dog's health profile, this one stop app allows you to easily find dog parks near you, and learn more about your current, or maybe even your next dog's breed!</Text>

        </View>

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
  header: {
    fontSize: 40,
    fontFamily:'PingFangSC-Light',
    marginBottom: 25,
    color: '#FFFFFF'
  },
  view: {
    backgroundColor: '#FFFFFF',
    opacity: .8,
    height: win.height / 1.5,
    width: win.width / 1.05,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  },
  text: {
    fontFamily:'PingFangSC-Light',
    fontSize:16,
    marginRight:win.width / 10,
    marginLeft:win.width / 10,
    textAlign:'center'
  }

});
export default About;
