import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  AVATAR,
  AVT,
  CONTACT,
  EVALUTE,
  FAVORITES,
  HISTORY,
  ICON_NEXT,
  ICON_RIGHT,
  ICON_SETTING,
  INTRODUCE,
  LOGO_GOTOUR,
  MEDAL_S,
  POST,
  VOUCHER,
} from '../../../../resource/assets/images';
import { ProfileProp } from './type';
import ItemCenter from '../../../../component/Items/ItemCenterTitle';
import ItemCenterContent from '../../../../component/Items/ItemCenterContent';

const Profile: React.FC<ProfileProp> = (props) => {
  const {navigation} = props;

  const onMoveToHistory = () => {
    navigation.navigate('history');
  }

  const onMoveToMyFavorite = () => {
    navigation.navigate('myFavorites');
  }

  const onMoveToEditProfile = () => {
    navigation.navigate('editProfile');
  };

  const onMoveToMyRating = () => {
    navigation.navigate('rating');
  };

  const onMoveToIntroduce = () => {
    navigation.navigate('introduction');
  };

  return (
    // HEADER
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.avtHeader}>
            <View style={styles.headerTitle}>
              <Image style={styles.imgAvatar} source={{ uri: AVT }}></Image>
              <View style={styles.grPoint}>
                <Text style={styles.textPoint}>102 Điểm</Text>
                <Image style={styles.imgPoint} source={{ uri: MEDAL_S }}></Image>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Image style={styles.imgSetting} source={{ uri: ICON_SETTING }}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.grText}>
          <Text style={styles.text}>Xin Chào </Text>
          <Text style={styles.textName}>Nguyễn Văn Thông</Text>
        </View>
        <Pressable style={styles.grProfile} onPress={onMoveToEditProfile}>
          <Text style={styles.text}>Thông tin cá nhân</Text>
          <Image style={styles.iconRight} source={{ uri: ICON_RIGHT }}></Image>
        </Pressable>
      </View>

      {/* CENTER */}
      <View style={styles.center}>
        <TouchableOpacity>
          <View style={styles.centerVoucher}>
            <Image style={styles.imgVoucher} source={{ uri: VOUCHER }}></Image>
            <View>
              <Text style={styles.textTitleVoucher}>
                Sử dụng khuyến mãi để tiết kiệm nhiều hơn
              </Text>
              <View style={styles.grVoucher}>
                <Text style={styles.textContentVoucher}>Bạn hiện có</Text>
                <Text style={{ fontSize: 18, color: '#fff' }}> 1 </Text>
                <Text style={styles.textContentVoucher}>Mã khuyến mãi</Text>
              </View>
            </View>
            <Image style={styles.imgNextVoucher} source={{ uri: ICON_NEXT }} ></Image>
          </View>
        </TouchableOpacity>

        {/* LIST HISTORY, FAVOURITE, POST */}
        <View style={styles.grCenterTitle}>
          <ItemCenter image={HISTORY} text='Lịch sử' onPress={onMoveToHistory}></ItemCenter>
          <ItemCenter image={FAVORITES} text='Yêu thích' onPress={onMoveToMyFavorite}></ItemCenter>
          <ItemCenter image={POST} text='Bài đăng'></ItemCenter>
        </View>

        {/* LIST EVALUTE, INTRODUCE, CONTACT */}
        <View style={styles.grCenterContent}>
          <Shadow distance={2} startColor={'#ccc'} endColor={'#ff00ff10'} offset={[0, 15]}>
            <View style={styles.grCenterContentList}>
              <ItemCenterContent onPress={onMoveToMyRating} image={EVALUTE} text={'Đang chờ\nđánh giá'}></ItemCenterContent>
              <ItemCenterContent onPress={onMoveToIntroduce} image={INTRODUCE} text={'Giới thiệu về\nGotour'}></ItemCenterContent>
              <ItemCenterContent image={CONTACT} text={'Chăm sóc\nkhách hàng'}></ItemCenterContent>
            </View>
          </Shadow>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.logo} source={{ uri: LOGO_GOTOUR }}></Image>
          <Text style={styles.textFooter}>Dịch vụ mà bạn có thể tin cậy</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.grButtonFooter}>
            <Text style={styles.textLogout}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 20,
    height: windowHeight,
    marginHorizontal: 10,
  },

  header: {
    backgroundColor: '#C1D8C3',
    height: windowHeight - (windowHeight * 77) / 100,
    marginTop: 10,
    borderRadius: 10,

  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  imgHeader: {
    position: 'relative',
  },

  imgCoin: {
    width: '60%',
    height: '30%',
  },

  avtHeader: {
    marginLeft: 30,
    marginTop: 5,
    width: 80,
    height: 80
  },

  imgAvatar:
  {
    position: 'absolute',
    marginLeft: -30,
    width: 70,
    height: 70,
  },

  headerTitle:
  {
    backgroundColor: '#6A9C89',
    width: windowWidth - (windowWidth * 50) / 100,
    height: windowHeight - (windowHeight * 90.5) / 100,
    position: 'relative',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  grPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    height: 60,
    marginLeft: 20,
  },

  textPoint:
  {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imgPoint:
  {
    width: 40,
    height: 40
  },

  imgSetting:
  {
    width: 30,
    height: 30
  },

  grText: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  grProfile: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 14,
  },

  iconRight:
  {
    marginLeft: 20,
    width:14,
    height:14
  },

  textName:
  {
    fontSize: 18,
    fontWeight: 'bold'
  },

  center: {
    flex: 0.4,
    marginTop: 10,
  },

  centerVoucher:
  {
    height: 60,
    width: '100%',
    backgroundColor: '#6A9C89',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imgVoucher:
  {
    marginLeft: 30,
    width: 40,
    height: 40
  },

  grVoucher:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },

  textTitleVoucher:
  {
    marginBottom: 10,
    fontSize: 12,
    color: '#fff'
  },

  textContentVoucher:
  {
    color: '#fff',
    fontSize: 14
  },

  imgNextVoucher:
  {
    width: 20,
    height: 20,
    marginRight: 10
  },

  // {/* LIST HISTORY, FAVOURITE, POST */}

  grCenterTitle:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  grCenterContent:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },

  grCenterContentList:
  {

    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',

  },


  logo:
  {
    width: 140,
    height: 140,
    marginTop: 40
  },

  footer: {
    flex: 0.35,
  },

  textFooter:
  {
    position: 'absolute',
    color: '#000',
    bottom: 20,
  },

  grButtonFooter:
  {
    width: '100%',
    height: 46,
    backgroundColor: '#6A9C89',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textLogout:
  {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C1D8C3'
  }
});
