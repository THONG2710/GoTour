import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  ICON_FACEBOOK,
  ICON_GOOGLE,
  ICON_HIDDENPASSWORD,
  ICON_LOCK,
  ICON_PHONE,
  ICON_SHOWPASSWOR,
  LOGO_GOTOUR,
} from '../../../../resource/assets/images';
import {LoginProp} from './type';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared-state/Hook/Hook';
import {
  SAVE_USER,
  SET_ISLOGGED,
} from '../../../../shared-state/Action/Authentications';

const Login: React.FC<LoginProp> = props => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const account = useAppSelector(state => state.Authentication.myAccount)
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const login = async () => {
    let data = {email, password};
    const fetchData = async (data: {email: string; password: string}) => {
      try {
        // let url = 'http://192.168.1.13:3000/api/user/login';
        let url = 'http://192.168.1.10:3000/api/user/login';

        const response = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        });
        const res = await response.json();
        return res;
      } catch (error) {
        console.log('login error: ' + error);
      }
    };
    const res = await fetchData(data);
    dispatch(SAVE_USER(res.user));
    if (res.result) {
      dispatch(SET_ISLOGGED(true));
      navigation.navigate('authorized');
      
    }
  };
  const register = () => {
    navigation.navigate('register');
  };
  const forgotPass = () => {
    navigation.navigate('resetPassword');
  };
  const loginWithGoogle = () => {
    console.log('loginWithGoogle');
  };
  const loginWithFacebook = () => {
    console.log('loginWithFacebook');
  };

  return (
    <View>
      {/* //========header====== */}
      <View>
        <View style={styles.div1}></View>
        <View style={styles.div2}></View>
      </View>
      {/* //========logo,tiitle====== */}
      <Image style={styles.logo} source={{uri: LOGO_GOTOUR}} />
      <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>
      {/* //========box====== */}
      <View style={styles.box}>
        {/* //========boxInput====== */}
        <View style={[styles.boxInput, {marginTop: 10}]}>
          <Image
            source={{uri: ICON_PHONE}}
            style={{
              width: 20,
              height: 20,
              marginLeft: 5,
              resizeMode: 'contain',
            }}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Nhập email"
            // keyboardType="numeric"
            value={email}
            onChangeText={setEmail}></TextInput>
        </View>
        <View style={styles.boxInput}>
          <Image
            source={{uri: ICON_LOCK}}
            style={{width: 20, height: 20, marginLeft: 5}}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Mật khẩu"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <Pressable onPress={togglePasswordVisibility}>
            <Image
              source={
                showPassword
                  ? {uri: ICON_SHOWPASSWOR}
                  : {uri: ICON_HIDDENPASSWORD}
              }
              style={{width: 25, height: 25, opacity: 0.5}}
            />
          </Pressable>
        </View>
        {/* //========forgotPass====== */}
        <Pressable onPress={forgotPass}>
          <Text style={styles.txtforgotPass}>Quên mật khẩu?</Text>
        </Pressable>
        {/* //========button====== */}
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#FD9448', '#FB8632', '#FF6B00']}
          style={styles.linearGradient}>
          <TouchableOpacity style={styles.btnLogin} onPress={login}>
            <Text style={styles.txtBtnLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* //========or====== */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
            marginLeft: 10,
            marginRight: 0,
          }}>
          <View
            style={{
              backgroundColor: 'black',
              width: 120,
              height: 1,
              marginTop: 10,
            }}></View>
          <Text style={{color: 'black'}}>Hoặc</Text>
          <View
            style={{
              backgroundColor: 'black',
              width: 120,
              height: 1,
              marginTop: 10,
            }}></View>
        </View>
        {/* //========login with google and facebook====== */}
        <View
          style={{flexDirection: 'row', justifyContent: 'center', zIndex: 1}}>
          <Pressable onPress={loginWithGoogle}>
            <Image style={styles.imgGoogle} source={{uri: ICON_GOOGLE}} />
          </Pressable>
          <Pressable onPress={loginWithFacebook}>
            <Image style={styles.imgGoogle} source={{uri: ICON_FACEBOOK}} />
          </Pressable>
        </View>
        {/* //========register====== */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            display: 'flex',
            marginTop: 20,
          }}>
          <Text style={{color: 'black'}}>Bạn chưa có tài khoản?</Text>
          <Pressable onPress={register}>
            <Text
              style={{color: 'green', fontWeight: '500', fontStyle: 'italic'}}>
              {' '}
              Đăng kí
            </Text>
          </Pressable>
        </View>
      </View>
      {/* //========footer====== */}
      <View>
        <View style={styles.div3}></View>
        <View style={styles.div4}></View>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  //========header======
  div1: {
    backgroundColor: '#FFCD9E',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 30,
    height: 100,
    width: 300,
    float: 'right',
    elevation: 0,
    position: 'absolute',
  },
  div2: {
    backgroundColor: '#F7DEC6',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 30,
    height: 180,
    width: 200,
    float: 'right',
    elevation: -2,
    position: 'absolute',
    right: 0,
  },
  //========logo,tiitle======
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 30,
  },
  txtLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: -30,
  },
  //========box======
  box: {
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    padding: 30,
  },
  //========boxInput======
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    width: 300,
    height: 50,
    paddingLeft: 10,
    marginTop: 20,
  },
  txtInput: {
    textAlign: 'left',
    marginLeft: 5,
    width: '78%',
  },
  //========forgotPass======
  txtforgotPass: {
    textAlign: 'right',
    marginTop: 10,
    color: 'green',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
  },
  //========button======
  linearGradient: {
    borderRadius: 20,
    marginTop: 20,
    width: 180,
    alignSelf: 'center',
    elevation: 5,
    marginBottom: 20,
  },
  btnLogin: {},
  txtBtnLogin: {
    textAlign: 'center',
    borderRadius: 20,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
  },
  //========google,facebook======
  imgGoogle: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  //========footer======
  div3: {
    backgroundColor: '#F1AF72',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    height: 300,
    width: 200,
    elevation: -1000,
    position: 'absolute',
    left: 0,
    marginTop: -200,
    pointerEvents: 'none',
    zIndex: -1,
  },
  div4: {
    backgroundColor: '#EBA05A',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 100,
    width: 300,
    elevation: -100,
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    zIndex: -1,
  },
});
