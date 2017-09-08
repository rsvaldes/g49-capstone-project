import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView, Button, Image, Dimensions, ScrollView, TouchableHighlight, StatusBar } from 'react-native';

const win = Dimensions.get('window');
const height = win.height / 4;
const width = win.width / 2;

class Profile extends React.Component {
  // static navigationOptions = {
  //   header: null
  // }
  constructor(){
    super()
    this.state = {
      poopCount:2,
      walks: 3,
      hoursSlept:5,
      exercise: 2
    }
  }

  render() {
    <StatusBar hidden={true} />
    const { navigate } = this.props.navigation;
    var poopCount = this.state.poopCount;
    var walks = this.state.walks;
    var hoursSlept = this.state.hoursSlept;
    var exercise = this.state.exercise;
    return (
      <View style ={styles.container}>
      <View style={styles.signout}>
      <Image
        source={require('../images/bells_avatar.jpg')}
          style={{height:35, width: 35,borderRadius:17.5,marginTop:-12,marginLeft:90}}
        />
      <Image
        source={require('../images/signout.png')}
        style={{height:30, width: 30,marginTop:-10,marginLeft:5}}
        />
        </View>
      <ScrollView style={{marginLeft:30}}>

      <View style={{flexDirection:'row'}}>
      <Text style={styles.header}>Bella</Text>
      <Image
        source={require('../images/paw.png')}
        style={{height:50, width:50, borderRadius:30}}
      />
      </View>
      <Image
        source={require('../images/bells_avatar.jpg')}
        style={{height:height, width:width, borderRadius:height/2,marginTop:5, marginLeft:40 }}
        />

        <Text style={{fontSize:20, fontWeight:'bold', marginTop:20}}>What I Love: <Text style={styles.info}>Tug-of-War, Fetch, Cuddling, Treats</Text></Text>
        <Text style={styles.main}>What I Don't Love:
        <Text style={styles.info}> Lettuce</Text></Text>
        <Text style={styles.main}>Allergies: <Text style={styles.info}>Bee stings</Text></Text>

        <Text style={{fontSize:50,fontFamily: 'PingFangSC-Light', marginLeft:10}}>This Week:</Text>
        <View style={{flexDirection:'row', marginTop: 20, marginLeft:40}}>
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
            <View style={{flexDirection:'row', marginTop: 20,marginLeft:40}}>
            <View style={{flexDirection:'column'}}>
            <Image
              source={require('../images/sleep.png')}
              style={{height:70, width:70, borderRadius:35, marginRight:20}}
              />
              <View style={{flexDirection:'row', marginLeft: 7}}>
              <Button
                onPress={() => this.setState({
                  hoursSlept: hoursSlept = hoursSlept - 1
                }) }
                title="-"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text style={{marginTop:11}}>{this.state.hoursSlept}</Text>
                <Button
                  onPress={() => this.setState({
                    hoursSlept: hoursSlept = hoursSlept + 1
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
                    exercise: exercise = exercise - 1
                  }) }
                  title="-"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  <Text style={{marginTop:11}}>{this.state.exercise}</Text>
                  <Button
                    onPress={() => this.setState({
                      exercise: exercise = exercise + 1
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
  },
  header: {
    fontSize:50,
    fontFamily: 'PingFangSC-Light',
    marginLeft:58
  },
  main: {
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'PingFangSC-Light',
    textAlign:'center'
  },
  info: {
    fontWeight:'normal',
    fontSize: 20,
    fontFamily: 'PingFangSC-Light',
    textAlign:'center'
  },
  back: {
    flex: 1,
    flexDirection:'row',
    alignContent:'flex-start',
    marginTop:20,
    marginLeft:-10
  },
  signout: {
    flex: 1,
    flexDirection:'row',
    marginTop: 25,
    marginLeft:200,
    marginBottom:-550
  },
});

export default Profile;
