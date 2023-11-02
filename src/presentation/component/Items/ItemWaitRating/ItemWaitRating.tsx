import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { ICON_CART, ICON_STAR3, ICON_STAR4, NHATRANG } from '../../../resource/assets/images'
interface Item{
  placeName:string,
  price:string,
  date:string,
  tripNumber:string
}
const ItemWaitRating: React.FC<Item> = (props) => {
  const{placeName,price,date,tripNumber}=props
  return (
    <View style={styles.container}>
      <Image source={{uri: NHATRANG}} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.nameAndRating}>
          <Text style={styles.txtPlaceName}>{placeName}</Text>
          <Image source={{uri: ICON_STAR3}} style={styles.star} />
        </View>
        <View style={styles.priceAndDate} >
          <Text style={styles.txtPrice}>{price}đ</Text>
          <Text >{date}</Text>
        </View>
        <Text>{tripNumber} lượt đi</Text>
        <TouchableOpacity>
          <View style={styles.btn}>
            <View style={styles.inBtn}>
              <Text style={styles.txtBtn}>Đặt hàng</Text>
              <Image source={{uri: ICON_CART}} style={styles.cart} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemWaitRating