import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styles from './stylesList'
import ItemFavourite from '../../../../component/Items/itemFavourite'
interface FavouriteListItemProps {
  navigation: any;
}

const FavouriteList:React.FC<FavouriteListItemProps> = (props) => {
  const{navigation} = props
  
  const render = ({ item }: { item: (typeof DATA)[0] }) => (
    <ItemFavourite data={} navigation={navigation} {...item} />

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