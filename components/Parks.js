import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Dimensions, ListView, ScrollView, FlatList, initialRegion, Modal, Button, Image, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import getDirections from 'react-native-google-maps-directions'

const win = Dimensions.get('window');

  // static navigationOptions = {
class Parks extends React.Component {
  //   header: null
  // }

  constructor(props) {
    super(props);
      let parkList = [
          {
            id:1,
            name: 'Valmont Dog Park',
            address: '5275 Valmont Rd, Boulder, CO 80301',
            picture:'https://www-static.bouldercolorado.gov/docs/banners/1375908308_Valmont_City_Park_Sign_Cropped.jpg',
            latlng:
              {
              latitude: 40.030376,
              longitude: -105.229691
              },
          },
          {
            id:2,
            name: 'Louisville Community Dog Park',
            address:'955 Bella Vista Dr.  Louisville, CO 80027',
            picture:'http://poofree.com/wp-content/uploads/2013/05/Mishka-Dog-Park-Review-Community-Park-Poop-Scoop-Louisville-Colorado-Poop-Scoop.jpg',
            latlng: {
              latitude: 39.970936,
              longitude: -105.130966
            }
          },
          {
            id:3,
            name: 'Davidson Mesa Open Space',
            address:'McCaslin Blvd & Washington Ave, Louisville, CO 80027',
            picture:'http://3.bp.blogspot.com/-30qgp5qDA08/VTnAME53mQI/AAAAAAAAR8o/aiCp6z-sYOg/s1600/DSC07619.JPG',
            latlng: {
              latitude: 39.978203,
              longitude: -105.165916
            }
          },
          {
            id:4,
            name: 'Foothills Dog Park',
            address:'800 Cherry St. Boulder, CO 80304',
            picture:'http://images.bringfido.com/site_media/photos/2014/04/06/photo____.jpg',
            latlng: {
              latitude: 39.964985,
              longitude: -105.157181
            },
          },
          {
            id:5,
            name: 'Coot Lake Open Space',
            address:' 6181 N 63rd St, Boulder, CO 80305',
            picture:'https://www-static.bouldercolorado.gov/docs/banners/1374788668_IMG_0283.jpg',
            latlng: {
              latitude: 40.086834,
              longitude: -105.206970
            }
          },
          {
            id:6,
            name: 'Great Bark Dog Park',
            address:'597 N 119th St, Lafayette, CO 80026',
            picture:'http://www.doggoes.com/sites/default/files/dog_images/the_3_musketeers.jpg',
            latlng: {
              latitude: 40.00526,
              longitude: -105.076263
            }
          },
          {
            id:7,
            name: 'Autrey Park',
            address:'1830 Honey Creek Ln, Superior, CO 80027',
            picture:'https://outgress.com/proxy/iMuAdIkNXKGtIC0NIycTel5kIbew5%2BVH8QXm4HsX3AmsNe6b5PA3mULXwOIlKxNPTblsJjOZBSpgaYMRroi2RftEGlmb76RokvYVrA%2FmQU7%2BGkf2h5cJ2PgcjuS5y%2Brkaw3XVspCK%2Bw8/image.png',
            latlng: {
              latitude: 39.936363,
              longitude: -105.144470
            }
          },
          {
            id:8,
            name: 'East Boulder Dog Park',
            address:'5660 Sioux Dr, Boulder, CO 80303',
            picture:'http://denverandboulderrealestate.com/wp-content/uploads/2012/02/dog-park-boulder1-300x225.jpg',
            latlng: {
              latitude: 39.991943,
              longitude: -105.223196
            }
          },
          {
            id:9,
            name: 'Howard Heuston Dog Park',
            address:'3164 34th St, Boulder, CO 80301',
            picture:'https://www-static.bouldercolorado.gov/docs/banners/1374786660_IMG_0656.jpg',
            latlng: {
              latitude: 40.032330,
              longitude: -105.247437
            }
          },
          {
            id:10,
            name: 'Blue Skies Park',
            address:'1520 Mountain Drive Longmont, CO 80503',
            picture:'https://www.longmontcolorado.gov/Home/ShowImage?id=2460&t=635368881194030000',
            latlng: {
              latitude: 40.142162,
              longitude: -105.172333
            }
          },
          {
            id:11,
            name: 'Longmont Dog Park',
            address:'1505 21st Ave, Longmont, CO 80501',
            picture:'https://www.longmontcolorado.gov/Home/ShowImage?id=6029&t=635548528499070000',
            latlng: {
              latitude: 40.194948,
              longitude: -105.115392
            }
          },
          {
            id:12,
            name: 'Airport Rd. Dog Park',
            address:'Airport Rd & Saint Vrain Rd, Longmont, CO 80503',
            picture:'http://www.doggoes.com/sites/default/files/dog_pics/img_0585.jpg',
            latlng: {
              latitude: 40.16706,
              longitude: -105.15449
            }
          },
          {
            id:13,
            name: 'Rough and Ready',
            address:'301 E 21st Ave, Longmont, CO 80504',
            picture:'https://www.longmontcolorado.gov/Home/ShowImage?id=2488&t=635369631230930000',
            latlng: {
              latitude: 40.195281,
              longitude: -105.088517
            }
          },
          {
            id:14,
            name: 'Stephen Day Park',
            address:'1340 Deerwood Dr, Longmont, CO 80504',
            picture:'https://woofalong.com/wp-content/uploads/2017/01/1656_Stephen-Day-Dog-Park-Longmont-Colorado.jpg',
            latlng: {
              latitude: 40.18294,
              longitude: -105.06298
            }
          },
          {
            id:15,
            name: 'Union Reservoir',
            address:'461 County Road 26, Longmont, CO 80504',
            picture:'https://photos.bringfido.com/attractions/57/57_7419.png',
            latlng: {
              latitude: 40.17202,
              longitude: -105.044307
            }
          },
          {
            id:17,
            name:'Weminister Hills Dog Park',
            address:'10499 Simms St, Westminster, CO 80005',
            picture:'http://www.doggoes.com/sites/default/files/dog_pics/parkphoto1_13.jpg',
            latlng: {
              latitude: 39.888130,
              longitude: -105.128677
            }
          },
          {
            id:18,
            name:'Big Dry Creek Dog Park',
            address:'1700 W 128th Ave, Westminster, CO 80234',
            picture:'https://woofalong.com/wp-content/uploads/2017/01/1689_Big-Dry-Creek-Dog-Park-Westminster-Colorado.jpg',
            latlng: {
              latitude: 39.927780,
              longitude: -105.009674
            }
          },
          {
            id:19,
            name:'Broomfield County Commons Park',
            address:'Sheridan Blvd, Broomfield, CO 80020',
            picture:'https://www.broomfield.org/ImageRepository/Path?filePath=%2Fdocuments%5C00000000-0000-0000-0000-000000000000%5C505%2Fcounty+commons.jpg',
            latlng: {
              latitude: 39.919971,
              longitude: -105.053024
            }
          },
          {
            id:20,
            name:'Tony Grampsas Dog Park',
            address:'4471 Salvia St, Golden, CO 80403',
            picture:'http://www.doggoes.com/sites/default/files/dog_images/golden.jpg',
            latlng: {
              latitude: 39.778004,
              longitude: -105.187653
            }
          }
        ];
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(parkList),
          modalVisible:false
        }
    }


  render() {
    return (
      <View style={{backgroundColor: '#429ea6'}}>
      <MapView
        showsUserLocation={true}
        style={styles.mapView}
        initialRegion={{
         latitude: 40.016636,
         longitude: -105.281708,
         latitudeDelta: .3,
         longitudeDelta: .7,
        }}
      >
      {this.state.dataSource._dataBlob.s1.map((marker,i) => (
        <MapView.Marker
          key={i}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
    <ListView
      style={styles.container}
      dataSource={this.state.dataSource}
      renderRow={(data) =>
      <View
        style={{flexDirection:'row'}}>
        <Text style={styles.text}
        onPress={() =>
          this.setState({
             id: data.id,
             name: data.name,
             address: data.address,
             picture: data.picture,
             modalVisible:!this.state.modalVisible
          })}
        >{data.name}
          <View style={{left: win.width - 60, height: 40, width: 60}}>
            <TouchableHighlight
            >
              <Image
                style={{height:32, width: 32, marginTop:18}}
                source={require('../images/more.png')}
              />
            </TouchableHighlight>
              </View>
            </Text>
          </View>
        }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
    />
      <View style={{backgroundColor:'#1DE9B6', width: win.width, height: win.height / 2}}>
          <Modal
            animationType={"fade"}
            transparent={false}
            visible={this.state.modalVisible}
          >
          <ScrollView style={{height:win.height/ 2, width: win.width}}>
          <View style={{alignItems:'flex-end', marginTop:40}}>
          <Button
          title="X"
          onPress={() => {
            this.setState({
              modalVisible: !this.state.modalVisible
            })
          }}
          />
          </View>
          <View>
          <Text style={{fontSize:40, textAlign:'center'}}>{this.state.name}</Text>
          <Image
            style={{height:300, width: win.width}}
            source={{uri: this.state.picture}}
          />
          <Text style={{fontSize:40, textAlign:'center',marginTop:30}}>{this.state.address}</Text>
          </View>
         </ScrollView>
        </Modal>
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#429ea6',
  },
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: '#1DE9B6',
    // marginBottom:-5,
    // marginTop: 5
  },
  text: {
    fontSize: 18,
    marginLeft:10,
    fontFamily: 'PingFangSC-Light',
    marginBottom:16,
  },
  mapView: {
    height: win.height / 2,
    width: win.width
  },
  view: {
    width: win.width,
    height:30,
  },
  signout: {
    flex: 1,
    flexDirection:'row',
    marginLeft:200,
    width:win.width,
    height:50,
    marginTop:-250
  }
});

export default Parks;
