import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView, Button, Image, Dimensions, ScrollView, TouchableHighlight, StatusBar } from 'react-native';

const win = Dimensions.get('window');
const height = win.height / 4;
const width = win.width / 2;

class Profile extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(){
    super()
    this.state = {
      poopCount:2,
      walks: 3
    }
  }

  render() {
    <StatusBar hidden={true} />
    const { navigate } = this.props.navigation;
    var poopCount = this.state.poopCount;
    var walks = this.state.walks;
    return (
      <View style ={styles.container}>
      <ScrollView>
      <View style={styles.back}>
      <TouchableHighlight onPress={() => navigate('Options')} style={styles.back}>
      <Image
        source={require('../images/back_button.png')}
        style={{height:50, width: 50}}
      />
      </TouchableHighlight>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.header}>Bella</Text>
      <Image
        source={require('../images/paw.png')}
        style={{height:50, width:50, borderRadius:30}}
      />
      </View>
      <Image
        source={require('../images/bells_avatar.jpg')}
        style={{height:height, width:width, borderRadius:height/2,marginTop:10 }}
        />

        <Text style={{fontSize:20, fontWeight:'bold', marginTop:20}}>What I Love: <Text style={styles.info}>Tug-of-War, Fetch, Cuddling, Treats</Text></Text>
        <Text style={styles.main}>What I Don't Love:
        <Text style={styles.info}>Lettuce</Text></Text>
        <Text style={styles.main}>Allergies:  <Text style={styles.info}>Bee stings</Text></Text>
        <Text style={styles.main}>My Weight: <Text style={styles.info}>24 lbs</Text></Text>

        <Text style={styles.header}>This Week:</Text>
        <View style={{flexDirection:'row', marginTop: 20}}>
        <View style={{flexDirection:'column'}}>
        <Image
          source={require('../images/poop.png')}
          style={{height:70, width:70, borderRadius:35, marginRight:20}}
          />
          <View style={{flexDirection:'row', marginLeft: 7}}>
          <Button
            onPress={() => this.setState({
              poopCount: poopCount = poopCount - 1
            }) }
            title="-"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            <Text style={{marginTop:11}}>{this.state.poopCount}</Text>
            <Button
              onPress={() => this.setState({
                poopCount: poopCount = poopCount + 1
              }) }
              title="+"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              />
              </View>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image
            source={require('../images/walk.png')}
            style={{height:70, width:70, borderRadius:35, marginLeft:20}}
            />
            <View style={{flexDirection:'row', marginLeft:26}}>
            <Button
              onPress={() => this.setState({
                walks: walks = walks - 1
              }) }
              title="-"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              />
              <Text style={{marginTop:11}}>{this.state.walks}</Text>
              <Button
                onPress={() => this.setState({
                  walks: walks = walks + 1
                }) }
                title="+"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', marginTop: 20}}>
            <View style={{flexDirection:'column'}}>
            <Image
              source={require('../images/sleep.png')}
              style={{height:70, width:70, borderRadius:35, marginRight:20}}
              />
              <View style={{flexDirection:'row', marginLeft: 7}}>
              <Button
                onPress={() => this.setState({
                  poopCount: poopCount = poopCount - 1
                }) }
                title="-"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text style={{marginTop:11}}>{this.state.poopCount}</Text>
                <Button
                  onPress={() => this.setState({
                    poopCount: poopCount = poopCount + 1
                  }) }
                  title="+"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  </View>
              </View>
              <View style={{flexDirection:'column'}}>
              <Image
                source={require('../images/exercise.png')}
                style={{height:70, width:70, borderRadius:35, marginLeft:20}}
                />
                <View style={{flexDirection:'row', marginLeft:26}}>
                <Button
                  onPress={() => this.setState({
                    walks: walks = walks - 1
                  }) }
                  title="-"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  <Text style={{marginTop:11}}>{this.state.walks}</Text>
                  <Button
                    onPress={() => this.setState({
                      walks: walks = walks + 1
                    }) }
                    title="+"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                    </View>
                </View>
                </View>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#429ea6',
    marginTop: -30
  },
  header: {
    fontSize:50,
    fontFamily: 'PingFangSC-Ultralight'
  },
  main: {
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'PingFangSC-Ultralight'
  },
  info: {
    fontWeight:'normal',
    fontSize: 20,
    fontFamily: 'PingFangSC-Ultralight'
  },
  back: {
    flex: 1,
    flexDirection:'row',
    alignContent:'flex-start',
    marginTop:20
  }});

export default Profile;
