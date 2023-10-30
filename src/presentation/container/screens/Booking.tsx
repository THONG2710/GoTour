import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TabViewItem from '../components/custom/TabViewItem'
import Plane from './Plane'
import Hotel from '../../component/items/Hotel'
import Train from './Train'
import { BACKGROUND, ICON_BELL, ICON_SEARCH } from '../../resource/assets/images'

const Booking: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: BACKGROUND}} />
      <View style={styles.header}>
        <Image source={require('../img/logo.png')} />
        <Image style={{ marginStart: 250, marginTop: 20 }} source={{uri: ICON_BELL}} />
      </View>
      <View style={styles.search}>
                <Text>Tìm kiếm...</Text>
                <Image source={{uri: ICON_SEARCH}} />
            </View>

   
      <TabViewItem 
        viewStyle={{ height: 80 }}
        tabStyle={{ backgroundColor: 'white' }}
        titleStyle={{ fontSize: 15, color: 'black' }}
        title1='Khách sạn'
        title2='Chuyến bay'
        title3='Tàu lửa'

        screen2={<Plane />}
        screen1={<Hotel />}
        screen3={<Train />}
      />
  </View>


  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '90%',
    padding: 8,
    borderRadius: 10,
    marginBottom:10,
    marginStart: 20
  },
  img: {
    position: 'absolute',

  }
})