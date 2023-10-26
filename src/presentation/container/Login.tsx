import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";



const Login = () => {
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);




    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const login = () => {
        console.log('phone', phone, 'Password:', password);
    };
    const register = () => {
        console.log('register');
    }
    const forgotPass = () => {
        console.log('forgotPass');
    }
    const loginWithGoogle = () => {
        console.log('loginWithGoogle');
    }
    const loginWithFacebook = () => {
        console.log('loginWithFacebook');
    }

    return (
        <View>
            <View >
                <View style={styles.div1}></View>
                <View style={styles.div2}></View>
            </View>
            <Image style={styles.logo} source={require("../resource/images/logo.png")} />
            <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>

            <View style={styles.box}>
                <View style={[styles.boxInput, { marginTop: 10 }]}>
                    <Image
                        source={require("../resource/images/phone.png")}
                        style={{ width: 20, height: 20, marginLeft: 5 }}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Số điện thoại"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={setPhone}
                    >
                    </TextInput>

                </View>

                <View style={styles.boxInput}>
                    <Image
                        source={require("../resource/images/lock.png")}
                        style={{ width: 20, height: 20, marginLeft: 5 }}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Mật khẩu"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword} />
                    <Pressable onPress={togglePasswordVisibility}>
                        <Image
                            source={showPassword ? require("../resource/images/eye.png") : require("../resource/images/hidden.png")}
                            style={{ width: 25, height: 25, opacity: 0.5 }}
                        />
                    </Pressable>

                </View>
                <Pressable onPress={forgotPass}>
                    <Text style={styles.txtforgotPass}>Quên mật khẩu?</Text>
                </Pressable>


                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FD9448', '#FB8632', "#FF6B00"]} style={styles.linearGradient}>
                    <Pressable style={styles.btnLogin} onPress={login}>
                        <Text style={styles.txtBtnLogin}>Đăng nhập</Text>
                    </Pressable>
                </LinearGradient>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", display: "flex", marginLeft: 10, marginRight: 0 }}>
                    <View style={{ backgroundColor: 'black', width: 120, height: 1, marginTop: 10 }}></View>
                    <Text style={{ color: 'black' }} >Hoặc</Text>
                    <View style={{ backgroundColor: 'black', width: 120, height: 1, marginTop: 10 }}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', zIndex: 1 }}>
                    <Pressable onPress={loginWithGoogle}>
                        <Image style={styles.imgGoogle} source={require("../resource/images/google.png")} />
                    </Pressable>
                    <Pressable onPress={loginWithFacebook}>
                        <Image style={styles.imgGoogle} source={require("../resource/images/facebook.png")} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', display: "flex", marginTop: 20 }}>
                    <Text style={{ color: 'black' }}>Bạn chưa có tài khoản?</Text>
                    <Pressable onPress={register}>
                        <Text style={{ color: 'green', fontWeight: '500', fontStyle: 'italic' }}> Đăng kí</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={styles.div3}></View>
                <View style={styles.div4}></View>
            </View>
        </View >
    )

}
export default Login;
const styles = StyleSheet.create({
    div1: {
        backgroundColor: "#FFCD9E",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 30,
        height: 100,
        width: 300,
        float: 'right',
        elevation: 0,
        position: 'absolute',
    },
    div2: {
        backgroundColor: "#F7DEC6",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 30,
        height: 180,
        width: 200,
        float: 'right',
        elevation: -2,
        position: 'absolute',
        right: 0
    },
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
    box: {

        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        padding: 30,

    },
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
        width: '78%'

    },
    txtforgotPass: {
        textAlign: 'right',
        marginTop: 10,
        color: 'green',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 15,
    },
    linearGradient: {
        borderRadius: 20,
        marginTop: 20,
        width: 180,
        alignSelf: 'center',
        elevation: 5,
        marginBottom: 20,
    },
    btnLogin: {

    },
    txtBtnLogin: {
        textAlign: 'center',
        borderRadius: 20,
        padding: 10,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 3,
        marginBottom: 3,
    },
    imgGoogle: {
        width: 35,
        height: 35,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,

    },


    div3: {
        backgroundColor: "#F1AF72",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 30,
        height: 300,
        width: 200,
        elevation: -1000,
        position: 'absolute',
        left: 0,
        marginTop: -200,
        pointerEvents: 'none',


    },
    div4: {
        backgroundColor: "#EBA05A",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        height: 100,
        width: 300,
        elevation: -100,
        position: 'absolute',
        right: 0,
        pointerEvents: 'none',




    },
})