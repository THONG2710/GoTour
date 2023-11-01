import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { B_HOME } from '../../resource/assets/images';
import { Color } from '../../resource/assets/Color/Colors';

type ItemBottomHomeProp = {
  icon: string;
  label: string;
  isFocused: boolean;
}

const ItemBottomHome: React.FC<ItemBottomHomeProp> = (props) => {
  const { icon, label, isFocused } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.icon} tintColor={isFocused ? Color.ORANGE : Color.BLACK } source={{uri: icon}}/>
      <Text style={[styles.label, {color: isFocused ? Color.ORANGE : Color.BLACK }]}>{label}</Text> 
    </View>
  )
}

export default ItemBottomHome

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginBottom: 2,
  },

  label: {
    fontSize: 12,
    color: 'black',
  }
})