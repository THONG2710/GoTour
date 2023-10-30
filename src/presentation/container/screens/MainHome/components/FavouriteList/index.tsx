import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import ItemFavourite from './itemFavourite'


const FavouriteList:React.FC = () => {
  const render = ({ item }: { item: (typeof DATA)[0] }) => (
    <ItemFavourite {...item} />

)
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={render}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      
    </View>
  )
}

export default FavouriteList
const DATA =[
  {id:'1',rating:'4.7',name:'Núi bà đen',location:'Tây ninh'},
  {id:'2',rating:'4.7',name:'Núi bà đen',location:'Tây nguyên'},
  {id:'3',rating:'4.7',name:'Núi bà đen',location:'Tây bắc'},
  {id:'4',rating:'4.7',name:'Núi bà đen',location:'Tây bắc'},
  {id:'5',rating:'4.7',name:'Núi bà đen',location:'Tây bắc'},
  {id:'6',rating:'4.7',name:'Núi bà đen',location:'Tây bắc'},
  {id:'7',rating:'4.7',name:'Núi bà đen',location:'Tây bắc'},

]