import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import ItemWaitRating from './ItemWaitRating'

const WaitRating:React.FC = () => {
  const render = ({ item }: { item: (typeof DATA)[0] }) => (
    <ItemWaitRating {...item} />

)
  return (
    <View style={styles.container}>
      <FlatList 
                data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                
                 />
    </View>
  )
}

export default WaitRating
const DATA=[
  {id:'1',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215'},
  {id:'2',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215'},
  {id:'3',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215'},
  {id:'4',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215'},

]