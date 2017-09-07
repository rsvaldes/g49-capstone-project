import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Dimensions, ListView, ScrollView, FlatList, initialRegion, Modal, Button, Image, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

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
            latlng: {
              latitude: 39.970936,
              longitude: -105.130966
            }
          },
          {
            id:3,
            name: 'Davidson Mesa Open Space',
            address:'McCaslin Blvd & Washington Ave, Louisville, CO 80027',
            latlng: {
              latitude: 39.978203,
              longitude: -105.165916
            }
          },
          {
            id:4,
            name: 'Foothills Dog Park',
            address:'800 Cherry St. Boulder, CO 80304',
            latlng: {
              latitude: 39.964985,
              longitude: -105.157181
            },
          },
          {
            id:5,
            name: 'Coot Lake Open Space',
            address:' 6181 N 63rd St, Boulder, CO 80305',
            latlng: {
              latitude: 40.086834,
              longitude: -105.206970
            }
          },
          {
            id:6,
            name: 'Great Bark Dog Park',
            address:'597 N 119th St, Lafayette, CO 80026',
            latlng: {
              latitude: 40.00526,
              longitude: -105.076263
            }
          },
          {
            id:7,
            name: 'Autrey Park',
            address:'1830 Honey Creek Ln, Superior, CO 80027',
            latlng: {
              latitude: 39.936363,
              longitude: -105.144470
            }
          },
          {
            id:8,
            name: 'East Boulder Dog Park',
            address:'5660 Sioux Dr, Boulder, CO 80303',
            latlng: {
              latitude: 39.991943,
              longitude: -105.223196
            }
          },
          {
            id:9,
            name: 'Howard Heuston Dog Park',
            address:'3164 34th St, Boulder, CO 80301',
            latlng: {
              latitude: 40.032330,
              longitude: -105.247437
            }
          },
          {
            id:10,
            name: 'Blue Skies Park',
            address:'1520 Mountain Drive Longmont, CO 80503',
            latlng: {
              latitude: 40.142162,
              longitude: -105.172333
            }
          },
          {
            id:11,
            name: 'Longmont Dog Park',
            address:'1505 21st Ave, Longmont, CO 80501',
            latlng: {
              latitude: 40.194948,
              longitude: -105.115392
            }
          },
          {
            id:12,
            name: 'Airport Rd. Dog Park',
            address:'Airport Rd & Saint Vrain Rd, Longmont, CO 80503',
            latlng: {
              latitude: 40.16706,
              longitude: -105.15449
            }
          },
          {
            id:13,
            name: 'Rough and Ready',
            address:'301 E 21st Ave, Longmont, CO 80504',
            latlng: {
              latitude: 40.195281,
              longitude: -105.088517
            }
          },
          {
            id:14,
            name: 'Stephen Day Park',
            address:'1340 Deerwood Dr, Longmont, CO 80504',
            latlng: {
              latitude: 40.18294,
              longitude: -105.06298
            }
          },
          {
            id:15,
            name: 'Union Resevoir',
            address:'461 County Road 26, Longmont, CO 80504',
            latlng: {
              latitude: 40.17202,
              longitude: -105.044307
            }
          },
          {
            id:16,
            name:'Off-Leash K-9 Training',
            address:'8472 Federal Blvd, Westminster, CO 80031',
            latlng: {
              latitude: 39.851078,
              longitude: -105.023338
            }
          },
          {
            id:17,
            name:'Weminister Dog Park',
            address:'105th Ave And Simms, Westminster, CO 80030',
            latlng: {
              latitude: 39.888130,
              longitude: -105.128677
            }
          },
          {
            id:18,
            name:'Big Dry Creek Dog Park',
            address:'1700 W 128th Ave, Westminster, CO 80234',
            latlng: {
              latitude: 39.927780,
              longitude: -105.009674
            }
          },
          {
            id:19,
            name:'Broomfield County Commons Park',
            address:'Sheridan Blvd, Broomfield, CO 80020',
            latlng: {
              latitude: 39.919971,
              longitude: -105.053024
            }
          },
          {
            id:20,
            name:'Tony Grampsas Dog Park',
            address:'4471 Salvia St, Golden, CO 80403',
            latlng: {
              latitude: 39.778004,
              longitude: -105.187653
            }
          },
          {
            id:21,
            name:'8th St. Dog Park',
            address:'7729 8th St, Golden, CO 80401',
            latlng: {
              latitude: 39.757990,
              longitude: -105.226990
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
      <View>
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
      {this.state.dataSource._dataBlob.s1.map(marker => (
        <MapView.Marker
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
        >{data.name}
          <View style={{left: win.width - 60, height: 40, width: 60}}>
            <TouchableHighlight
            onPress={() =>
              this.setState({
                 id: data.id,
                 name: data.name,
                 description: data.address,
                 modalVisible:!this.state.modalVisible
              })}
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
      <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
      >
      <ScrollView>
      <Text>{this.state.name}</Text>
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
    fontFamily: 'PingFangSC-Ultralight',
    marginBottom:16,
  },
  mapView: {
    height: win.height / 2,
    width: win.width
  },
  view: {
    width: win.width,
    height:30,
  }
});

export default Parks;
