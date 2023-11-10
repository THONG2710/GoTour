import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import TabViewItem from '../../components/custom/TabViewItem'
import Plane from './TabBooking/BookPlane/Plane'
import Hotel from './TabBooking/BookHotel/Hotel'
import Train from './TabBooking/BookTrain/Train'
import { BACKGROUND, ICON_BELL, ICON_SEARCH, LOGO_GOTOUR } from '../../../resource/assets/images'
import { BookingProp } from './type'
import { Shadow } from 'react-native-shadow-2'


const Booking: React.FC<BookingProp> = () => {
  return (

    <View style={styles.container}>
      {/* <Image style={styles.img} source={{uri: BACKGROUND}} /> */}

      <Image style={styles.img} source={require('../../img/background2.png')} />
      <View style={styles.header}>
        <Image source={{ uri: LOGO_GOTOUR }} style={styles.logo} />
        <TouchableOpacity style={styles.click_Bell}>
          <Image style={styles.icon_bell} source={{ uri: ICON_BELL }} />
        </TouchableOpacity>
      </View>
      <Shadow distance={1.5} startColor={'#fff'} endColor={'#ccc'} containerStyle={{marginLeft:20, marginBottom:20}}>
        <View style={styles.search}>
          <TextInput placeholder='Tìm kiếm...' style={styles.textInput} />
          <TouchableOpacity style={styles.click}>
            <Image source={{ uri: ICON_SEARCH }} style={styles.icon_search} />
          </TouchableOpacity>
        </View>
      </Shadow>


      <TabViewItem
        tabStyle={{ backgroundColor: 'white' }}
        titleStyle={{ fontSize: 14, color: 'black' }}
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
    justifyContent: 'space-between',
    paddingEnd: 20
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '90%',
    padding: 8,
    borderRadius: 10,
    height: 50,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: 352
  },
  icon_bell: {

    width: 24,
    height: 24,
    alignSelf: 'center'
  },
  logo: {
    width: 100,
    height: 80
  },
  icon_search: {
    width: 20,
    height: 20,
    marginEnd: 10
  },
  textInput: {
    width: '90%',
    height: 37
  },
  click: {
    alignSelf: 'center'
  },
  click_Bell: {
    alignSelf: 'center'
  }
})