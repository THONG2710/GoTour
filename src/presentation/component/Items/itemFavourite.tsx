import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON_HEART4, ICON_MARKER4, ICON_STAR2, NUIBADEN } from '../../resource/assets/images';
import { TourModel } from '../../../domain/Entities/TourModel';


interface Item {
  data: TourModel
  navigation: any
}

const ItemFavourite: React.FC<Item> = (props) => {
  const { navigation, data } = props;
  const onMoveDetailTour = () => {
    navigation.navigate('s_detailtour', {data: data});
  };
  return (
    <TouchableOpacity onPress={ onMoveDetailTour}>
      <View style={styles.container}>

        {/* IMAGE BACKFROUND */}
        <Image source={{ uri: data.images }} style={{ borderRadius: 10, width: 212, height: 183, position: 'absolute' }} />
        {/* RATING & FAVOURITE */}
        <View style={styles.head}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: ICON_STAR2 }} style={{ width: 16, height: 16 }} />
            <Text style={{ marginHorizontal: 5, color: 'white' }}>{data.favorites.toString()}</Text>
          </View>
          <Image source={{ uri: ICON_HEART4 }} style={{ width: 16, height: 16 }} />
        </View>
        {/* NAME & LOCATION */}
        <View style={styles.place}>
          <Text style={styles.name} numberOfLines={2}>{data.tourName}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: ICON_MARKER4 }} />
            {/* <Text style={styles.location}>{data.price.toString()}</Text> */}
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default ItemFavourite

const styles = StyleSheet.create({
  container: {
    width: 212,
    height: 183,
    marginRight: 10
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  place: {
    marginHorizontal: 10,
    marginTop: 90
  },
  name: {
    color: 'white',
    fontSize: 16
  },
  location: {
    color: 'white',
    fontSize: 13,
    marginHorizontal: 5
  }

})