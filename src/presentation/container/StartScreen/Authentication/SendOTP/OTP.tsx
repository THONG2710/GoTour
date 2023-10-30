import React, { useRef, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { LOGO_GOTOUR } from "../../../../resource/assets/images";
import { SendOTPProp } from "./type";


const OTP: React.FC<SendOTPProp> = (props) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const firstInput = useRef<TextInput>(null);
    const secondInput = useRef<TextInput>(null);
    const thirdInput = useRef<TextInput>(null);
    const fourthInput = useRef<TextInput>(null);
    const {navigation} = props;

    const nextInput = (index: number) => {
        if (index === 0) {
            if (otp[1] === "") {

                secondInput.current?.focus();

            } else {
                nextInput(1);
            }

        } else if (index === 1) {
            if (otp[2] === "") {
                thirdInput.current?.focus();
            } else {
                nextInput(2);
            }
        } else if (index === 2) {
            fourthInput.current?.focus();
        }
    }
    const confirmOTP = () => {
        const otpcode = otp.join("");
        if (otpcode.length !== 4) {
            ToastAndroid.show("Vui lòng nhập đủ 4 số", ToastAndroid.SHORT);
        }
        console.log(otpcode);
        console.log(otp);
        navigation.navigate('changePassword');
    }

    return (

        <View style={{ flex: 1, }}>
            {/* //========header====== */}
            <View >
                <View style={styles.div2}></View>
                <View style={styles.div1}></View>
            </View>
            {/* //========logo,tiitle====== */}
            <Image style={styles.logo} source={{uri: LOGO_GOTOUR}} />
            {/* //========main====== */}
            <View>
                <Text style={styles.txtOTP}>NHẬP OTP</Text>
                <Text style={styles.txt}>Vui lòng nhập mã OTP được gửi đến số điện thoại </Text>
                {/* //=======phone====== */}
                <Text style={styles.phone} id="phone">0123456789</Text>
                {/* //=======otpInput====== */}
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TextInput
                        ref={firstInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => {
                            setOtp([text, otp[1], otp[2], otp[3]]);
                            text && nextInput(0);
                        }}
                    />
                    <TextInput
                        ref={secondInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => {
                            setOtp([otp[0], text, otp[2], otp[3]]);
                            text && nextInput(1);
                        }}
                    />
                    <TextInput
                        ref={thirdInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => {
                            setOtp([otp[0], otp[1], text, otp[3]]);
                            text && nextInput(2);
                        }}
                    />
                    <TextInput
                        ref={fourthInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => {
                            setOtp([otp[0], otp[1], otp[2], text]);
                            text && nextInput(3);
                        }}
                    />
                </View>
            </View>
            {/* //========button====== */}
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FD9448', '#FB8632', "#FF6B00"]} style={styles.linearGradient}>
                <Pressable style={styles.btnConfirm} onPress={confirmOTP}>
                    <Text style={styles.txtBtnConfirm}>Xác nhận</Text>
                </Pressable>
            </LinearGradient>
        </View>

    )
}
export default OTP;
const styles = StyleSheet.create({
    //========header======
    div1: {
        backgroundColor: "#F7DEC6",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 30,
        height: 200,
        width: 200,
        float: 'right',
        elevation: -2,
        position: 'absolute',
        right: 0

    },
    div2: {
        backgroundColor: "#FFCD9E",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 30,
        height: 100,
        width: 300,
        float: 'right',
        elevation: 0,
        position: 'absolute',
    },
    //========logo======
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50
    },
    //========tittle======
    txtOTP: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FF6B00",
        textAlign: 'center',
        marginTop: 10
    },
    //========text======
    txt: {
        fontSize: 15,
        color: "#000",
        textAlign: 'center',
        marginTop: 10
    },
    //========phone======
    phone: {
        fontSize: 18,
        color: "#FF6B00",
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
        marginBottom: 10
    },
    //========otpInput======
    otpInput: {
        elevation: 10,
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

    },
    //========button======
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
})