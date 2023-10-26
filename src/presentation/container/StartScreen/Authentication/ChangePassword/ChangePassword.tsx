import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ICON_HIDDENPASSWORD, ICON_LOCK, ICON_SHOWPASSWOR, LOGO_GOTOUR } from "../../../../resource/assets/images";
import { ChangePasswordProp } from "./type";



const ChangePassword: React.FC<ChangePasswordProp> = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {navigation} = props;
   
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const submit = () => {
        // Handle password submission
        console.log('Password:', password, 'confirmPassword:', confirmPassword);
        if(password!==confirmPassword){
            ToastAndroid.show("Mật khẩu không khớp", ToastAndroid.SHORT);
        }
        navigation.navigate('login');
    };

    return (
        <View>
            <Image style={styles.logo} source={{uri: LOGO_GOTOUR}} />
            <Text style={styles.txtResetPass}>ĐẶT LẠI MẬT KHẨU</Text>

            <View style={styles.box}>
                <View style={[styles.boxInput, { marginTop: 10 }]}>
                    <Image
                        source={{uri: ICON_LOCK}}
                        style={{ width: 20, height: 20 }}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Mật khẩu mới"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    >

                    </TextInput>
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
                        style={{ width: 20, height: 20 }}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder=" Nhập lại mật khẩu mới" 
                        secureTextEntry={!showConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}/>
                    <Pressable onPress={toggleConfirmPasswordVisibility}>
                        <Image
                            source={showConfirmPassword ? {uri: ICON_SHOWPASSWOR} : {uri: ICON_HIDDENPASSWORD}}
                            style={{ width: 25, height: 25, opacity: 0.5 }}
                        />
                    </Pressable>
                </View>
                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FD9448', '#FB8632', "#FF6B00"]} style={styles.linearGradient}>
                    <Pressable style={styles.btnConfirm} onPress={submit}>
                        <Text style={styles.txtBtnConfirm}>Xác nhận</Text>
                    </Pressable>
                </LinearGradient>
            </View>
            <View style={{ height: 200 }}>
                <View style={styles.div1}></View>
                <View style={styles.div2}></View>
            </View>
        </View >
    )

}
export default ChangePassword;
const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 30,
    },
    txtResetPass: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',

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
    linearGradient: {
        borderRadius: 20,
        marginTop: 30,
        width: 180,
        alignSelf: 'center',
        elevation: 5,
    },
    btnConfirm: {

    },
    txtBtnConfirm: {
        textAlign: 'center',
        borderRadius: 20,
        padding: 10,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    div1: {
        backgroundColor: "#F1AF72",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 30,
        height: 300,
        width: 200,
        elevation: -2,
        position: 'absolute',
        left: 0,
        marginTop: -50,
        pointerEvents: 'none',

    },
    div2: {
        backgroundColor: "#EBA05A",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        height: 100,
        width: 300,
        elevation: -1,
        position: 'absolute',
        right: 0,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        bottom: 0,
        pointerEvents: 'none',



    },
})