import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import ItemDoneRating from '../../../../../../component/Items/itemDoneRating/ItemDoneRating'

const DoneRating:React.FC = () => {
    const render = ({ item }: { item: (typeof DATA)[0] }) => (
      <ItemDoneRating {...item} />
  
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

export default DoneRating
const DATA=[
  {id:'1',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215',rating:'4.7'},
  {id:'2',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215',rating:'4.7'},
  {id:'3',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215',rating:'4.7'},
  {id:'4',placeName:'Bãi biển Nha Trang',price:'1.790.000',date:'3N2Đ',tripNumber:'215',rating:'4.7'},

  

]