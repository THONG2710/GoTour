import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (


    <View style={styles.container}>
      <ScrollView>
      <View>
          <Image style={{ width: '100%', height: 280, position: 'absolute' }} source={require("../resource/images/backgroundProfile.png")} />
          <Pressable>
            <Image source={require("../resource/images/settingbutton.png")} style={{ width: 30, height: 30, margin: 10, alignSelf: 'flex-end' }} />
          </Pressable>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image source={require("../resource/images/avatar.png")} style={styles.avatar} />
            <Pressable>
              <Image source={require("../resource/images/editbutton.png")} style={{ width: 15, height: 15, marginLeft: -15, marginTop: 140 }} />
            </Pressable>
          </View>
          <Text style={styles.name}>Bùi Tùng Linh</Text>
        </View>
        <View style={styles.options}>
          <View>
            <Pressable>
              <Image source={require("../resource/images/datchobutton.png")} style={styles.button} />
              <Text style={styles.textbtn}>Toàn bộ chỗ đặt</Text>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <Image source={require("../resource/images/saptoibutton.png")} style={styles.button} />
              <Text style={styles.textbtn}>Sắp tới</Text>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <Image source={require("../resource/images/xemgandaybutton.png")} style={styles.button} />
              <Text style={styles.textbtn}>Xem gần đây</Text>
            </Pressable>
          </View>

        </View>
        <View style={styles.options2}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable style={styles.pressable}>
              <Image source={require("../resource/images/danhgiabutton.png")} style={[styles.button2,]} />
              <Text style={styles.textbtn2}>Đang chờ{'\n'} đánh giá</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={require("../resource/images/daluubutton.png")} style={[styles.button2,]} />
              <Text style={styles.textbtn2}>Đã lưu</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={require("../resource/images/thebutton.png")} style={[styles.button2,]} />
              <Text style={styles.textbtn2}>Thẻ của tôi</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Pressable style={styles.pressable}>
              <Image source={require("../resource/images/thongtinkhbutton.png")} style={[styles.button2,]} />
              <Text style={styles.textbtn2}>Thông tin{'\n'}khách hàng</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={require("../resource/images/cskhbutton.png")} style={styles.button2} />
              <Text style={styles.textbtn2}>Chăm sóc{'\n'}khách hàng</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={require("../resource/images/baidangbutton.png")} style={styles.button2} />
              <Text style={styles.textbtn2}>Bài đăng{'\n'} của tôi</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.options3]}>
          <Pressable style={styles.pressable}>
            <Image source={require("../resource/images/gioithieubutton.png")} style={[styles.button2,]} />
            <Text style={styles.textbtn2}>Giới thiệu{'\n'} về Gotour</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Image source={require("../resource/images/danhgiaudbutton.png")} style={styles.button2} />
            <Text style={styles.textbtn2}>Đánh giá{'\n'}ứng dụng</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Image source={require("../resource/images/dieukhoanbutton.png")} style={styles.button2} />
            <Text style={styles.textbtn2}>Điều khoản{'\n'}& Điều kiện</Text>
          </Pressable>
        </View>
      </ScrollView>
        
      
    </View >


  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    flex: 1,
  },
  avatar: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 15,
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  button: {
    width: 40,
    height: 40,
    alignSelf: 'center',

  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  textbtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  options2: {

    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button2: {
    width: 30,
    height: 30,
    alignSelf: 'center',

  },
  pressable: {
    width: 100,
    height: 80,
  },
  textbtn2: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
  },
  options3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 20,
    padding: 15,
    paddingBottom:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});