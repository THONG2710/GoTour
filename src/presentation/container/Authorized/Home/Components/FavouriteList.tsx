import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './stylesList';
import ItemFavourite from '../../../../component/Items/itemFavourite';
import { TourModel } from '../../../../../data/Entities/TourModel';
interface FavouriteListItemProps {
  navigation: any;
  listTour: TourModel[];
}

const FavouriteList: React.FC<FavouriteListItemProps> = props => {
  const {navigation, listTour} = props;
  const render = ({item}: {item: TourModel}) => (
    <ItemFavourite navigation={navigation} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={listTour}
        renderItem={render}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default FavouriteList;
const DATA = [
  {id: '1', rating: '4.7', name: 'Núi bà đen', location: 'Tây ninh'},
  {id: '2', rating: '4.7', name: 'Núi bà đen', location: 'Tây nguyên'},
  {id: '3', rating: '4.7', name: 'Núi bà đen', location: 'Tây bắc'},
  {id: '4', rating: '4.7', name: 'Núi bà đen', location: 'Tây bắc'},
  {id: '5', rating: '4.7', name: 'Núi bà đen', location: 'Tây bắc'},
  {id: '6', rating: '4.7', name: 'Núi bà đen', location: 'Tây bắc'},
  {id: '7', rating: '4.7', name: 'Núi bà đen', location: 'Tây bắc'},
];
