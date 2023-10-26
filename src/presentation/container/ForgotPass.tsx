import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const ForgotPass = () => {
  const [phone, setPhone] = useState('')

  const submit = () => {
    console.log('Phone:', phone);

  }
  const register = () => {
    console.log('register');
  }
  const backToSignIn = () => {
    console.log('backToSignIn');
  }
  const cantResetPass = () => {
    console.log('cantResetPass');
  }


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
        <Image style={{ width: 150, height: 150 }} source={require("../resource/images/logo.png")} />
        <View style={styles.div1}></View>
      </View>
      <View style={styles.div2}>
        <Text style={styles.txtForgotPass}>QUÊN MẬT KHẨU</Text>
      </View>
      <View style={styles.main}>
        <TextInput style={styles.textinput}
          placeholder="Số điện thoại"
          onChangeText={setPhone}
          value={phone}
          keyboardType="numeric"
        >


        </TextInput>
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={["#FD9448", '#FB8631', '#D75D04']} style={styles.linearGradient}>
          <Pressable style={styles.btnSubmit} onPress={submit}>
            <Text style={styles.txtSubmit}>Xác nhận</Text>
          </Pressable>
        </LinearGradient>
        <Pressable onPress={cantResetPass}>
          <Text style={styles.txtCantGetPass}>Không thể lấy lại được mật khẩu?</Text>

        </Pressable>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", display: "flex", marginLeft: 20, marginRight: 20 }}>
          <View style={{ backgroundColor: 'black', width: 130, height: 1, marginTop: 10 }}></View>
          <Text >Hoặc</Text>
          <View style={{ backgroundColor: 'black', width: 130, height: 1, marginTop: 10 }}></View>
        </View>
        <Pressable onPress={register}>
          <Text style={styles.txtRegister}>Đăng kí tài khoản mới</Text>
        </Pressable>

        <Pressable style={styles.btnBackToSignIn} onPress={backToSignIn}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Trở lại đăng nhập</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', elevation: 0 }}>
        <View style={styles.div3}></View>
        <View style={styles.div4}></View>
      </View>

    </View>

  )
}
export default ForgotPass;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  div1: {
    backgroundColor: "#F4B276",
    borderTopLeftRadius: 100,
    height: 200,
    width: 200,
    float: 'right',

  },
  div2: {
    backgroundColor: "#D8A06D",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 150,
    height: 100,
    width: 300,
    marginTop: -70,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtForgotPass: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: 'center',
  },
  main: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',


  },
  textinput: {
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#F2F2F2',
    marginRight: 20,
    borderRadius: 10,
    paddingLeft: 20,


  },
  txtSubmit: {

    textAlign: 'center',
    borderRadius: 20,
    padding: 10,
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,

  },
  btnSubmit: {
    width: 180,

  },
  linearGradient: {
    borderRadius: 20,
    marginTop: 15,
    width: 180,
    alignSelf: 'center',
    elevation: 5,
  },
  txtCantGetPass: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'grey',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
  },
  txtRegister: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FB8631',
    marginTop: 10,
    marginBottom: 10,
  },
  btnBackToSignIn: {
    alignSelf: 'flex-end',
    backgroundColor: '#D8A06D',
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 40,
    marginTop: 10,
  },
  div3: {
    backgroundColor: "#F7DEC6",
    width: 200,
    height: 400,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    marginTop: -30,
    elevation: 1,
    pointerEvents: 'none',


  },
  div4: {
    backgroundColor: "#FFCD9E",
    width: 270,
    height: 200,
    marginLeft: -50,
    marginTop: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 100,
    pointerEvents: 'none',


  },
});
