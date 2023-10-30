import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

interface Item{
  rating:string,
  name:string,
  location:string
}

const ItemFavourite:React.FC<Item> = (props) => {
  const {rating,name,location}=props;
  return (
    <View style={styles.container}>

      {/* IMAGE BACKFROUND */}
        <Image source={require('../../../../img/nuibaden.png')} style={{borderRadius:10,width:212,height:183,position:'absolute'}}/>
        {/* RATING & FAVOURITE */}
        <View style={styles.head}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../../../img/star2.png')} style={{width:16,height:16}} />
            <Text style={{marginHorizontal:5,color:'white'}}>{rating}</Text>
          </View>
          <Image source={require('../../../../img/heart4.png')} style={{width:16,height:16}} />
        </View>
        {/* NAME & LOCATION */}
        <View style={styles.place}>
            <Text style={styles.name}>{name}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={require('../../../../img/pin2.png')}/>
              <Text style={styles.location}>{location}</Text>
            </View>
        </View>

    </View>
  )
}

export default ItemFavourite

const styles = StyleSheet.create({
  container:{
    width:212,
    height:183,
    marginRight:10
  },
  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  place:{
    marginHorizontal:10,
    marginTop:90
  },
  name:{
    color:'white',
    fontSize:20
  },
  location:{
    color:'white',
    fontSize:13,
    marginHorizontal:5
  }

})