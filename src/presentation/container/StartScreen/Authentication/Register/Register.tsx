import React, { useState } from "react";
import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ICON_HIDDENPASSWORD, ICON_LOCK, ICON_PHONE, ICON_SHOWPASSWOR, ICON_USER, LOGO_GOTOUR } from "../../../../resource/assets/images";
import { RegisterProp } from "./type";



const Register: React.FC<RegisterProp> = (props) => {
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    const {navigation} = props;



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setshowConfirmPassword(!showConfirmPassword);
    };
    const login = () => {
        navigation.navigate('login');
    };
    const register = () => {
        console.log('name:',name ,"phone:",phone,'pass:',password,'confirmpass:', confirmPassword);
    }


    return (
        <ScrollView style={{flex:1}}>
            <SafeAreaView >
              {/* //========header====== */}
                <View >
                    <View style={styles.div1}></View>
                    <View style={styles.div2}></View>
                </View>
                {/* //========logo,tittle====== */}
                <Image style={styles.logo} source={{uri: LOGO_GOTOUR}} />
                <Text style={styles.txtRegister}>ĐĂNG KÝ</Text>
                {/* //========box====== */}
                <View style={styles.box}>
                    {/* //========boxInput====== */}
                    <View style={[styles.boxInput, { marginTop: 0 }]}>
                        <Image
                            source={{uri: ICON_USER}}
                            style={{ width: 20, height: 20, marginLeft: 5 }}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Họ và tên"
                            value={name}
                            onChangeText={setName}
                        >
                        </TextInput>

                    </View>
                    <View style={[styles.boxInput, { marginTop: 20 }]}>
                        <Image
                            source={{uri: ICON_PHONE}}
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
                            source={{uri: ICON_LOCK}}
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
                                source={showPassword ? {uri: ICON_SHOWPASSWOR} : {uri: ICON_HIDDENPASSWORD}}
                                style={{ width: 25, height: 25, opacity: 0.5 }}
                            />
                        </Pressable>

                    </View>
                    <View style={styles.boxInput}>
                        <Image
                            source={{uri: ICON_LOCK}}
                            style={{ width: 20, height: 20, marginLeft: 5 }}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            secureTextEntry={!showConfirmPassword}
                            onChangeText={setConfirmPassword}
                            focusable />
                        <Pressable onPress={toggleConfirmPasswordVisibility}>
                            <Image
                                source={showConfirmPassword ?{uri: ICON_SHOWPASSWOR} : {uri: ICON_HIDDENPASSWORD}}
                                style={{ width: 25, height: 25, opacity: 0.5 }}
                            />
                        </Pressable>

                    </View>
                    {/* //========button====== */}
                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FD9448', '#FB8632', "#FF6B00"]} style={styles.linearGradient}>
                        <Pressable style={{}} onPress={register}>
                            <Text style={styles.txtbtnRegister}>Đăng ký</Text>
                        </Pressable>
                    </LinearGradient>
                    {/* //========login====== */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', display: "flex" }}>
                        <Text style={{ color: 'black' }}>Bạn đã có tài khoản?</Text>
                        <Pressable onPress={login}>
                            <Text style={{ color: 'green', fontWeight: '500', fontStyle: 'italic' }}> Đăng nhập</Text>
                        </Pressable>
                    </View>
                </View>
                {/* //========footer====== */}
                <View style={{height:80}}>
                    <View style={styles.div3}></View>
                    <View style={styles.div4}></View>
                </View>
            </SafeAreaView>
        </ScrollView>

    )

}
export default Register;
const styles = StyleSheet.create({
    //========header======
    div1: {

        backgroundColor: "#F7DEC6",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 180,
        width: 150,

        elevation: -2,
        position: 'absolute',
        left: 0
    },
    div2: {
        backgroundColor: "#FFCD9E",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 100,
        height: 100,
        width: 300,
        right: 0,
        elevation: -1,
        position: 'absolute',
    },
    //========logo======
    logo: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        marginTop: 30,
    },
    //========tittle======
    txtRegister: {
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
        zIndex: 10

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
        width: '78%'

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
    txtbtnRegister: {
        textAlign: 'center',
        borderRadius: 20,
        padding: 10,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 3,
        marginBottom: 3,
    },
    //========footer======
    div3: {


        backgroundColor: "#EBA05A",
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        height: 100,
        width: 300,
        elevation: -1,
        position: 'absolute',
        left: 0,
        pointerEvents: 'none',
        zIndex:1

    },
    div4: {

        backgroundColor: "#F1AF72",
        borderTopRightRadius: 10,

        height: 300,
        width: 200,
        elevation:-10,
        position: 'absolute',
        right: 0,
        marginTop: -100,
        pointerEvents: 'none',
        zIndex:-1
       


    },
})