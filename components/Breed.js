import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView, ListView, Image, Modal, SectionList, Button, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

const win = Dimensions.get('window');

class Breed extends React.Component {
  // static navigationOptions = {
  //   header: null
  // }

  constructor(props) {
    super(props);
    let arr = this.props.navigation.state.params.map((element) => element);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(arr),
      modalVisible: false,
      }
    }
  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={true}>
        <TouchableHighlight>
        <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) =>
          <View style={{padding:12,flexDirection:'row',flex:1,alignItems:'center'}}>
          <Image
             source={{ uri: data.picture}} style={styles.photo} />
         <Text
            style={styles.text}
            onPress={() =>
              this.setState({
                 id: data.id,
                 name: data.name,
                 description: data.description,
                 picture: data.picture,
                 size:data.size,
                 lifespan: data.lifespan,
                 modalVisible:!this.state.modalVisible
                 }
              )}>
          {data.name}
         </Text>
         </View>
        }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        />
        </TouchableHighlight>
        </ScrollView>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          >
          <ScrollView>
         <View style={{marginTop: 40}}>
         <View style={{alignItems:'flex-end'}}>
         <Button
         title="X"
         onPress={() => {
           this.setState({
             modalVisible: !this.state.modalVisible
           })
         }}
         />
         </View>
         <View style={{flex:1,alignItems:'center'}}>
         <Text style={{fontSize:40}}>{this.state.name}</Text>
         <Image
           style={{height:300, width: win.width}}
           source={require('../images/back_button.png')}
         />
         <Text style={{fontSize:20, fontWeight:'bold'}}>Size</Text>
         <Text style={{fontSize:20}}>{this.state.size}</Text>
         <Text style={{fontSize:20, fontWeight:'bold'}}>Lifespan</Text>
         <Text style={{fontSize:20}}>{this.state.lifespan}</Text>
         <Text style={{fontSize:20}}>{this.state.description}</Text>
         </View>
         </View>
         </ScrollView>
        </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 10,
    backgroundColor: '#1DE9B6',
    marginTop: 12,
    marginBottom: 12
  },
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: win.height,
    backgroundColor:'#429ea6'
  },
  text: {
   marginLeft: 12,
   fontSize: 25,
   fontFamily: 'PingFangSC-Ultralight'
 },
 photo: {
    flex:1,
    width: win.width,
    height: 100
  },
  contentContainer: {
   paddingVertical: 20
 },
 photo: {
   height: 50,
   width: 50,
   borderRadius: 20
 }
});

export default Breed;
