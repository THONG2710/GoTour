import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemListHotel from '../../../../../component/Items/ItemListHotel';
import {
  ICON_COIN,
  ICON_HOTEL,
  ICON_MARKER2,
  ICON_USER2,
  ICON_STAR,
} from '../../../../../resource/assets/images';
import {getData} from '../../../../../../core/RequestMethod';
import {ID_HOME_A} from '../../../../../../core';
import HotelModel from '../../../../../../domain/Entities/HotelModel';

interface HotelItemProps {
  navigation: any;
}
const Hotel: React.FC<HotelItemProps> = props => {
  const {navigation} = props;
  const [listHotel, setListHotel] = useState<HotelModel[]>([]);

  // hiển thị danh sách khách sạn
  const render = ({item}: {item: HotelModel}) => (
    <ItemListHotel navigation={navigation} hotel={item} />
  );

  //   lấy danh sách khách sạn từ database
  const getAllHotels = async () => {
    try {
      const res = await getData(
        'http://' + ID_HOME_A + ':3000/api/hotel/getAllHotels',
      );
      setListHotel(res.hotels);
    } catch (error) {
      console.log('Failed to get all hotels: ' + error);
    }
  };

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.book}>
          <View style={styles.item1}>
            <Image source={{uri: ICON_MARKER2}} style={styles.icon_Item} />
            <TouchableOpacity>
              <Text style={styles.btnChoose}>Nhập/Chọn điểm đến</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item1}>
            <Image source={{uri: ICON_USER2}} style={styles.icon_Item} />
            <TouchableOpacity>
              <Text style={styles.txtPerson}>
                <Text style={styles.numberPerson}>1 </Text>
                phòng
                <Text style={styles.numberPerson}> 2 </Text>
                người lớn
                <Text style={styles.numberPerson}> 0 </Text>
                trẻ em
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item1}>
            <Image source={{uri: ICON_STAR}} style={styles.icon_Item} />
            <TouchableOpacity>
              <Text style={styles.txtPerson}>0 sao</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item1}>
            <Image source={{uri: ICON_COIN}} style={styles.icon_Item} />
            <TouchableOpacity>
              <Text style={styles.txtPerson}>0đ </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_Find}>Tìm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTitle}>
          <Image source={{uri: ICON_HOTEL}} style={styles.icon_hotel} />
          <Text style={styles.title}>
            Hãy lựa chọn khách sạn phù hợp cho bạn
          </Text>
        </View>
        <View>
          <FlatList
            data={listHotel}
            renderItem={render}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            style={styles.flatlist}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: 150,
  },
  book: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 'auto',
    marginVertical: 10,
    borderRadius: 20,
    padding: 13,
    width: '95%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  item1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#F7DEC6',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  item3: {
    marginTop: 20,
    backgroundColor: '#8F8F8F',
    borderRadius: 10,
    height: 'auto',
    flexDirection: 'row',
    paddingRight: 10,
    margin: 5,
  },
  list: {
    marginTop: 450,

    width: '100%',
  },
  icon_Item: {
    width: 20,
    height: 20,
  },
  btnChoose: {
    fontSize: 16,
    color: 'black',
    margin: 5,
  },
  txtPerson: {
    fontSize: 16,
    color: 'black',
    margin: 5,
  },
  numberPerson: {
    fontWeight: 'bold',
    color: 'black',
  },
  btn_Find: {
    fontSize: 20,
    color: 'orange',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerTitle: {
    flexDirection: 'row',
    paddingHorizontal: 15,

    width: '95%',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginStart: 5,
    marginTop: -5,
    marginHorizontal: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  icon_hotel: {
    width: 40,
    height: 40,
  },
  flatlist: {
    backgroundColor: '#EBEBEB',
  },
});
const DATA = [
  {
    id: '1',
    nameHotel: 'Seashell Hotel & Spa Phú Quốc',
    countRating: 233,
    location:
      '253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam',
    price: '4.462.000',
  },
  {
    id: '2',
    nameHotel: 'Seashell Hotel & Spa Phú Quốc',
    countRating: 244,
    location:
      '253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam',
    price: '5.462.000',
  },
  {
    id: '3',
    nameHotel: 'Seashell Hotel & Spa Phú Quốc',
    countRating: 255,
    location:
      '253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam',
    price: '6.462.000',
  },
];
