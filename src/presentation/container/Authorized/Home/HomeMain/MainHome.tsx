import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Input } from '@rneui/base'
import FavouriteList from '../Components/FavouriteList'
import { AVATAR, AVT, BUS, HOTEL, ICON_BELL, ICON_CAMPING, ICON_ISLAND, ICON_MARKER, ICON_MENU, ICON_MOUNTAIN, ICON_SEA, ICON_SEARCH, IMAGE1, IMAGE2, IMAGE3, LOGO_GOTOUR, SHIP, TOURPLACE, TRAVELLING, TXTTITLE } from '../../../../resource/assets/images'
import { HomeMainProp } from './type'

const MainHome: React.FC<HomeMainProp> = props => {
  const [text, onChangeText] = React.useState('');
  const {navigation} = props;

  const onMoveToListTour = () => {
    navigation.navigate('s_listTour');
  };

  const onMoveToService = () => {
    navigation.navigate('Service');
  };

  useEffect(() => {
    let url = 'http://192.168.1.12:3000/api/tour/getAllTours';
    fetch(url)
      .then(response => response.json())
    //   .then(response => setData(response.products))
    //   .catch(err => alert(err));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Image background */}
        <Image source={{uri: TOURPLACE}} style={styles.imgBackground} />
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={{uri: ICON_MENU}} style={styles.icon_menu} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image source={{uri: ICON_BELL}} style={styles.icon_bell} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{uri: AVT}} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>
        {/* LOGO */}
        <View style={styles.logo}>
          <Image source={{uri: ICON_MARKER}} style={styles.icon_marker} />
          <View style={{marginHorizontal: 10}}>
            <Image source={{uri: LOGO_GOTOUR}} style={styles.logo_gotour} />
            <Image source={{uri: TXTTITLE}} style={styles.txttitle} />
          </View>
        </View>
        {/* SEARCH */}
        <View style={styles.search}>
          <TouchableOpacity>
            <Image source={{uri: ICON_SEARCH}} style={styles.icon_search} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Tìm kiếm địa điểm . . ."
          />
        </View>
        {/* CATEGORY */}
        <Text style={styles.titleCategory}>Danh mục</Text>
        <View style={styles.category}>
          <TouchableOpacity onPress={onMoveToListTour}>
            <View style={styles.item}>
              <Image source={{uri: ICON_MOUNTAIN}} style={styles.imgItem} />
              <Text style={styles.nameCategory}>Núi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onMoveToListTour}>
            <View style={styles.item}>
              <Image source={{uri: ICON_SEA}} style={styles.imgItem} />
              <Text style={styles.nameCategory}>Biển</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onMoveToListTour}>
            <View style={styles.item}>
              <Image source={{uri: ICON_ISLAND}} style={styles.imgItem} />
              <Text style={styles.nameCategory}>Đảo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onMoveToListTour}>
            <View style={styles.item}>
              <Image source={{uri: ICON_CAMPING}} style={styles.imgItem} />
              <Text style={styles.nameCategory}>Cắm trại</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* FAVOURITE */}
        <View style={styles.title}>
          <Text style={styles.favourite}>Yêu thích</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FavouriteList />
        {/* SERVICE */}
        <Text style={styles.titleTop}>Dịch vụ</Text>
        <View style={styles.service}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={onMoveToService}>
              <View style={styles.itemService}>
                <Image source={{uri: HOTEL}} style={styles.iconService} />
                <Text style={styles.nameService}>Khách sạn</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onMoveToService}>
              <View style={styles.itemService}>
                <Image source={{uri: TRAVELLING}} style={styles.iconService} />
                <Text style={styles.nameService}>Máy bay</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onMoveToService}>
              <View style={styles.itemService}>
                <Image source={{uri: BUS}} style={styles.iconService} />
                <Text style={styles.nameService}>Xe buýt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onMoveToService}>
              <View style={styles.itemService}>
                <Image source={{uri: SHIP}} style={styles.iconService} />
                <Text style={styles.nameService}>Thuyền</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* TOP LIMIT */}
        <Text style={styles.titleTop}>Hàng đầu</Text>
        <View style={styles.sliderImg}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image source={{uri: IMAGE1}} style={styles.imgSlider} />
            <Image source={{uri: IMAGE2}} style={styles.imgSlider} />
            <Image source={{uri: IMAGE3}} style={styles.imgSlider} />
            <Image source={{uri: IMAGE1}} style={styles.imgSlider} />
            <Image source={{uri: IMAGE1}} style={styles.imgSlider} />
            <Image source={{uri: IMAGE1}} style={styles.imgSlider} />
            <Image source={{uri: IMAGE1}} style={styles.imgSlider} />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainHome;
