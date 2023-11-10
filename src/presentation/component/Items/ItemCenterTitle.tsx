import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import { HISTORY } from '../../resource/assets/images'

interface ItemCenterTitleProps{
    image: string;
    text:string;
    onPress?: () => void;
}
const ItemCenterTitle: React.FC<ItemCenterTitleProps> = (props) => {
    const { image, text, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
    <Shadow distance={2} startColor={'#ccc'} endColor={'#ff00ff10'} offset={[0, 15]}>
      <View
        style={styles.grListCenter}>
        <Image style={styles.imgCenter} source={{uri: image}}></Image>
        <Text style={{ marginTop: 10 }}>{text}</Text>
      </View>
    </Shadow>
  </TouchableOpacity>
  )
}

export default ItemCenterTitle

const styles = StyleSheet.create({
    grListCenter:
    {
      backgroundColor: '#fff',
      width: 120,
      height: 100,
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imgCenter:
    {
        width:30,
        height:30
    }
})