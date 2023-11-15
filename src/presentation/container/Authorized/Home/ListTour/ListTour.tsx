import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Ripple from 'react-native-material-ripple';
import { Shadow } from 'react-native-shadow-2';
import ItemMyFavourite from '../../../../component/Items/ItemMyFavourite';
import Carousel from 'react-native-snap-carousel';
import ItemExploreMyFavourite from '../../../../component/Items/ItemExploreMyFavourite';
import { ListTourProp, Props } from './type';
import {
  ANOTHER,
  CAMP,
  ICON_BACK,
  ICON_BELL,
  ICON_CAMPING,
  ICON_CART,
  ICON_EXPLORE,
  ICON_FIRE,
  ICON_HEART,
  ICON_ISLAND,
  ICON_MOUNTAIN,
  ICON_NOHEART,
  ICON_SEA,
  ICON_SEARCH_BLACK,
  IMG_FAVOURITE,
  IMG_FVR,
  ISLAND,
  MENU_MYFVR,
  MOUNTAIN,
  SEA,
  SLIDE4,
} from '../../../../resource/assets/images';

const SLIDE_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDE_WIDTH * 0.6;

const ListTour: React.FC<ListTourProp> = () => {
  function carouselCardItem({ item, index }: Props) {
    return (

      <View style={styles.cardCarousel} key={index}>
        <Image source={{ uri: item.image }} style={styles.imageSlide}></Image>
        <View style={styles.groupSlide}>
          <View>
            <View style={styles.groupHeader}>
              <Text style={styles.textAddress}>{item.name}</Text>
              <Image
                style={{ width: 24, height: 24 }}
                source={{ uri: ICON_HEART }}></Image>
            </View>
            <Text style={styles.textTurn}>{item.turn}</Text>
          </View>
          <View>
            <View style={styles.groupFooter}>
              <Text style={styles.textPrice}>{item.price}</Text>
              <Text style={styles.textTime}>{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <ScrollView>

      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.imgHeader} source={{ uri: IMG_FAVOURITE }}></Image>
          <View style={styles.iconHeader}>
            <Ripple>
              <Image style={{ width: 24, height: 24 }} source={{ uri: ICON_BACK }}></Image>
            </Ripple>
            <Ripple>
              <Image style={{ width: 24, height: 24 }} source={{ uri: ICON_BELL }}></Image>
            </Ripple>
          </View>
          <Text style={styles.textHeader}>
            Lựa chọn chuyến đi phù hợp {`\n`}cho bạn nào !!!
          </Text>
          <View style={styles.menuMyFVT}>
            <Shadow
              distance={1}
              endColor={'#ff00ff10'}
              offset={[20, 1]}
              style={styles.findMyFavourite}>
              <TextInput placeholder="Tìm kiếm ..."></TextInput>
            </Shadow>
            <Image style={styles.find} source={{ uri: ICON_SEARCH_BLACK }}></Image>
            <Image style={styles.imgMenu} source={{ uri: MENU_MYFVR }}></Image>
          </View>
          <FlatList
            style={{ marginTop: 200}}
            data={data}
            renderItem={({ item }) => <ItemMyFavourite item={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id}
            horizontal
          />
        </View>

        <View style={styles.center}>
          <View style={styles.titleCenter}>
            <Text style={styles.textTitle}>Điểm đến yêu thích</Text>
            <Image style={{width:30, height:30, marginLeft:10}} source={{ uri: ICON_FIRE }}></Image>
          </View>
          <Carousel
            data={dataSlide}
            renderItem={carouselCardItem}
            sliderWidth={SLIDE_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}>
            {/* <Text style={{ color: '#fff', backgroundColor: 'red' }}>
              Trường đẹp trai
            </Text> */}
          </Carousel>
        </View>

        <View style={styles.footer}>
          <View style={styles.titleCenter}>
            <Text style={styles.textTitle}>Khám phá thêm</Text>
            <Image source={{ uri: ICON_EXPLORE }}></Image>
          </View>
         
          <View>
            {dataExplore.map((item) => (
              <View key={item._id}>
                <View style={styles.discover}>
                  <View>
                    <Image style={styles.imageAddress} source={{ uri: SLIDE4 }}></Image>
                  </View>
                  <View>
                    <View style={styles.groupHeader}>
                      <Text style={styles.titleExplore}>{item.title}</Text>
                      <TouchableOpacity>

                        <Image style={styles.iconNoHeart} source={{ uri: ICON_NOHEART }}></Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
                      <View>
                        <Text style={{ color: 'red', fontWeight: '400', fontSize: 15 }}>{item.price}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500' }}>{item.turn}</Text>
                      </View>
                      <Text>{item.time}</Text>
                    </View>

                    <TouchableOpacity>
                      <View style={{ flexDirection: 'row', borderRadius: 5, backgroundColor: '#ff7a00', alignItems: 'center', justifyContent: 'center', marginHorizontal: 25, marginTop: 10, paddingLeft: 10, padding: 3 }}>
                        <Text style={{ color: '#fff', marginBottom: 3 }}>Đặt ngay</Text>
                        <Image style={{ marginLeft: 5 }} source={{ uri: ICON_CART }}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListTour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 0.45,
    alignItems: 'center',
    marginTop: 10,
  },

  imgHeader: {
    width: '95%',
    borderRadius: 20,
    position: 'absolute',
    height: 200
  },

  iconHeader: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 7,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 130,
    left: 40,
  },

  menuMyFVT: {
    width: '90%',
    position: 'absolute',
    flexDirection: 'row',
    bottom:70,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  findMyFavourite: {
    width: 290,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    left: 20,
  },

  imgMenu: {
    marginRight: 10,
    width:50,
    height:50
  },

  find: {
    marginRight: 35,
    width: 20,
    height: 20,
  },

  center: {
    flex: 0.3,
    marginTop:20
  },

  titleCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 20,
    color: 'red',
    fontWeight: '500',
    marginLeft: 20,
  },

  cardCarousel: {
    width: ITEM_WIDTH,
  },

  imageSlide: {
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    position: 'relative',
  },

  textAddress: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  titleExplore:
  {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },

  textTurn: {
    color: 'white',
    fontWeight: '500',
    fontSize: 10,
    marginLeft: 10,
  },

  groupSlide: {
    position: 'absolute',
    width: ITEM_WIDTH,
    justifyContent: 'space-between',
    height: '100%',
  },

  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },

  groupFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 5,
    alignItems: 'center',
  },

  textPrice: {
    color: '#fff',
    fontWeight: 'bold',
  },

  textTime: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flex: 0.3,
    marginTop:10,
    paddingBottom:30
  },

  discover:
  {
    width: '95%',
    height: 140,
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation:10,
    shadowColor:'#000'

  },
  imageAddress:
  {
    marginTop: 20,
    marginLeft: 15,
    width: 150,
    height: 100,
    borderRadius: 15
  },

  iconNoHeart:
  {
    marginLeft: 20,
    marginTop: 5,
    width:30,
    height:30
  }
});

const data = [
  {
    _id: '1',
    title: 'Núi',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_moutain.png?alt=media&token=a816c546-71eb-4ca0-8531-a114a2e16cc9&_gl=1*8x8bub*_ga*NzI0MjkxNDY1LjE2OTE0NjY1MTQ.*_ga_CW55HF8NVT*MTY5ODMzMjI0OS44My4xLjE2OTgzMzQxNjguNDYuMC4w',
  },

  {
    _id: '2',
    title: 'Biển',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_sea.png?alt=media&token=a81fb8a3-33df-4b4e-8c25-d605fd8ac855&_gl=1*yglvo*_ga*NzI0MjkxNDY1LjE2OTE0NjY1MTQ.*_ga_CW55HF8NVT*MTY5ODMzMjI0OS44My4xLjE2OTgzMzQxOTEuMjMuMC4w',
  },
  {
    _id: '3',
    title: 'Đảo',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_sea.png?alt=media&token=a81fb8a3-33df-4b4e-8c25-d605fd8ac855&_gl=1*yglvo*_ga*NzI0MjkxNDY1LjE2OTE0NjY1MTQ.*_ga_CW55HF8NVT*MTY5ODMzMjI0OS44My4xLjE2OTgzMzQxOTEuMjMuMC4w',

  },
  {
    _id: '4',
    title: 'Cắm trại',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_sea.png?alt=media&token=a81fb8a3-33df-4b4e-8c25-d605fd8ac855&_gl=1*yglvo*_ga*NzI0MjkxNDY1LjE2OTE0NjY1MTQ.*_ga_CW55HF8NVT*MTY5ODMzMjI0OS44My4xLjE2OTgzMzQxOTEuMjMuMC4w',

  },
  {
    _id: '5',
    title: 'Khác',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_sea.png?alt=media&token=a81fb8a3-33df-4b4e-8c25-d605fd8ac855&_gl=1*yglvo*_ga*NzI0MjkxNDY1LjE2OTE0NjY1MTQ.*_ga_CW55HF8NVT*MTY5ODMzMjI0OS44My4xLjE2OTgzMzQxOTEuMjMuMC4w',

  },
];

const dataSlide = [
  {
    id: 1,
    name: 'Sapa - Fansipan',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/exploremore.png?alt=media&token=5d2388a4-6b66-4826-9c8e-8327a970ab62',
    turn: '419 lượt đi',
    price: '12.190.000đ',
    time: '7N6Đ',
  },

  {
    id: 2,
    name: 'Sapa - Fansipan',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/exploremore.png?alt=media&token=5d2388a4-6b66-4826-9c8e-8327a970ab62',
    turn: '523 lượt đi',
    price: '14.190.000đ',
    time: '9N6Đ',
  },

  {
    id: 3,
    name: 'Sapa - Fansipan',
    image: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/exploremore.png?alt=media&token=5d2388a4-6b66-4826-9c8e-8327a970ab62',
    turn: '680 lượt đi',
    price: '2.190.000đ',
    time: '3N2Đ',
  },
];

const dataExplore = [
  {
    _id: '1',
    title: 'Bãi biển nha Trang',
    price: '1.790.000đ',
    time: '3N2Đ',
    turn: '518 lượt đi',
    image: SLIDE4
  },

  {
    _id: '2',
    title: 'Bãi biển nha Trang',
    price: '1.990.000đ',
    time: '3N3Đ',
    turn: '588 lượt đi',
    image: SLIDE4
  },
];
