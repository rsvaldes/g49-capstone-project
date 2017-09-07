import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Dimensions, ListView, ScrollView, FlatList, initialRegion } from 'react-native';
import MapView from 'react-native-maps';

const win = Dimensions.get('window');

  // static navigationOptions = {
  class Parks extends React.Component {
  //   header: null
  // }

  constructor(props) {
    super(props);
    this.state = {
        parkList: [
        {
          key:1,
          name: 'Valmont Dog Park', address: '5275 Valmont Rd, Boulder, CO 80301',
          latlng:
            {
            latitude: 40.030376,
            longitude: -105.229691
            },
        },
        {
          key:2,
          name: 'Louisville Community Dog Park', address:'955 Bella Vista Dr.  Louisville, CO 80027',
          latlng: {
            latitude: 39.970936,
            longitude: -105.130966
          }
        },
        {
          key:3,
          name: 'Davidson Mesa Open Space', address:'McCaslin Blvd & Washington Ave, Louisville, CO 80027',
          latlng: {
            latitude: 39.978203,
            longitude: -105.165916
          }
        },
        {
          key:4,
          name: 'Foothills Dog Park', address:'800 Cherry St. Boulder, CO 80304',
          latlng: {
            latitude: 39.964985,
            longitude: -105.157181
          },
        },
        {
          key:5,
          name: 'Coot Lake Open Space', address:' 6181 N 63rd St, Boulder, CO 80305',
          latlng: {
            latitude: 40.086834,
            longitude: -105.206970
          }
        },
        {
          key:6,
          name: 'Great Bark Dog Park', address:'597 N 119th St, Lafayette, CO 80026',
          latlng: {
            latitude: 40.00526,
            longitude: -105.076263
          }
        },
        {
          key:7,
          name: 'Autrey Park', address:'1830 Honey Creek Ln, Superior, CO 80027',
          latlng: {
            latitude: 39.936363,
            longitude: -105.144470
          }
        },
        {
          key:8,
          name: 'East Boulder Dog Park', address:'5660 Sioux Dr, Boulder, CO 80303',
          latlng: {
            latitude: 39.991943,
            longitude: -105.223196
          }
        },
        {
          key:9,
          name: 'Howard Heuston Dog Park', address:'3164 34th St, Boulder, CO 80301',
          latlng: {
            latitude: 40.032330,
            longitude: -105.247437
          }
        },
        {
          key:10,
          name: 'Blue Skies Park', address:'1520 Mountain Drive Longmont, CO 80503',
          latlng: {
            latitude: 40.142162,
            longitude: -105.172333
          }
        },
        {
          key:11,
          name: 'Longmont Dog Park', address:'1505 21st Ave, Longmont, CO 80501',
          latlng: {
            latitude: 40.194948,
            longitude: -105.115392
          }
        },
        {
          key:12,
          name: 'Airport Rd. Dog Park', address:'Airport Rd & Saint Vrain Rd, Longmont, CO 80503',
          latlng: {
            latitude: 40.16706,
            longitude: -105.15449
          }
        },
        {
          key:13,
          name: 'Rough and Ready', address:'301 E 21st Ave, Longmont, CO 80504',
          latlng: {
            latitude: 40.195281,
            longitude: -105.088517
          }
        },
        {
          key:14,
          name: 'Stephen Day Park', address:'1340 Deerwood Dr, Longmont, CO 80504',
          latlng: {
            latitude: 40.18294,
            longitude: -105.06298
          }
        },
        {
          key:15,
          name: 'Union Resevoir', address:'461 County Road 26, Longmont, CO 80504',
          latlng: {
            latitude: 40.17202,
            longitude: -105.044307
          }
        }
      ]
    }
  }

  render() {
    return (
      <View>
      <MapView
        initialRegion={{
         latitude: 40.016636,
         longitude: -105.281708,
         latitudeDelta: .3,
         longitudeDelta: .7,
        }}
      showsUserLocation={true}
      style={{height: win.height / 2, width: win.width}}
      >
  {this.state.parkList.map(marker => (
    <MapView.Marker
      coordinate={marker.latlng}
      title={marker.name}
      description={marker.address}
    />
  ))}
</MapView>
<View>
<FlatList
  data={this.state.parkList}
  keyExtractor={item => item.key}
  renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
  ItemSeparatorComponent={separators.highlight}
/>
</View>
</View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    flex: 1,
    height: 10,
    backgroundColor: '#1DE9B6',
    marginTop: 12,
    marginBottom: 12
  },
  text: {
    fontSize: 25
  }
});

export default Parks;
