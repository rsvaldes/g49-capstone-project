import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView, Button, TouchableHighlight, Image, StatusBar, Dimensions, Animated, Easing, TouchableOpacity } from 'react-native';

const win = Dimensions.get('window');

class Options extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(){
    super();
    this.spinValue = new Animated.Value(0);
    this.state = {
      breedList: [],
    }
  }
  componentDidMount() {
    this.spin();
    return fetch('https://shelby-capstone-server.herokuapp.com/breeds')
    .then((res) => res.json())
    .then((resJson) => {
      this.setState({
        breedList: resJson
      });
    })
  }
  spin () {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }
  ).start(() => this.spin())
}

  render() {
    const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })


    const { navigate } = this.props.navigation;

    return (

      // <StatusBar hidden={true} />
      <View style={styles.container}>
      <View style={styles.signout}>
      <Image
        source={require('../images/bells_avatar.jpg')}
          style={{height:50, width: 50,borderRadius:25, flexDirection:'row', justifyContent:'flex-start'}}
        />
      <Image
        source={require('../images/signout.png')}
        style={{height:40, width: 40}}
        />
        </View>
      <View style={{flexDirection:'row', alignItems:'center', marginTop: 100}}>
      <View style={{flexDirection:'column'}}>
        <TouchableOpacity onPress={() => navigate('Parks') } style={{borderRadius: 80}}>
        <Animated.Image
        source={require('../images/parks.png')}
        style={{height:135, width: 135, marginRight:20}}

        />
        </TouchableOpacity>
        <Text style={styles.text}>Dog Parks</Text>
        </View>
        <View style={{flexDirection:'column'}}>
        <TouchableOpacity onPress={() => navigate('Profile')}>
        <Image
        source={require('../images/profile.png')}
        style={{height:135, width: 135, marginLeft:20}}
        />
        </TouchableOpacity>
        <Text style={styles.text}>Profile</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',marginBottom:win.height / 5}}>
        <View style={{flexDirection:'column'}}>
        <TouchableOpacity onPress={() => navigate('Breed', this.state.breedList)}>
        <Image
        source={require('../images/breeds.png')}
        style={{height:135, width: 135, marginRight:20}}
        />
        </TouchableOpacity>
        <Text style={styles.text}>Breed Info</Text>
        </View>
        <View style={{flexDirection:'column'}}>
        <TouchableOpacity onPress={() => navigate('FureverHomes')}>
        <Image
        source={require('../images/adopt.png')}
        style={{height:135, width:135, marginLeft:20}}
        />
        </TouchableOpacity>
        <Text style={styles.bottom}>Adopt</Text>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#429ea6',
    alignItems: 'center',
    justifyContent:'center'
  },
  signout: {
    flex: 1,
    flexDirection:'row',
    marginTop: 50,
    marginLeft:200
  },
  text: {
    fontSize: 20,
    fontFamily: 'PingFangSC-Ultralight',
    textAlign:'center'
  },
  bottom: {
    fontSize:20,
    marginBottom:40,
    fontFamily: 'PingFangSC-Ultralight',
    textAlign:'center'
  }
});

export default Options;
