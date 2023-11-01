import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
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
      <Image source={require('../../../../../img/nhatrang.png')} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.nameAndRating}>
          <Text style={styles.txtPlaceName}>{placeName}</Text>
          <Image source={require('../../../../../img/star3.png')} style={styles.star} />
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
              <Image source={require('../../../../../img/cart.png')} style={styles.cart} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemWaitRating