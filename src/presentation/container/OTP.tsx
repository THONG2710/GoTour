import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native"



const OTP = () => {
    const [otp, setOtp] = useState({1:'',2:'',3:'',4:''});
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();

    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const nextInput = (index) => {
        if (index === 1) {
            if (otp[2] === "") {
                secondInput.current.focus();
            }
            nextInput(2);
        } else if (index === 2) {
            if (otp[3] === "") {
                thirdInput.current.focus();
            }
            nextInput(3);
        } else if (index === 3) {

            fourthInput.current.focus();
        }
    }
    return (

        <View style={{ flex: 1, }}>
            <View >
                <View style={styles.div2}></View>
                <View style={styles.div1}></View>
            </View>
            <Image style={styles.logo} source={require("../resource/images/logo.png")} />
            <View>
                <Text style={styles.txtOTP}>NHẬP OTP</Text>
                <Text style={styles.txt}>Vui lòng nhập mã OTP được gửi đến số điện thoại </Text>
                <Text style={styles.phone} id="phone">0123456789</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TextInput
                        ref={firstInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                         
                        onChangeText={(text) => {
                            setOtp({ ...otp, 1: text });
                            text && nextInput(1);
                        
                            
                        }}
                    />
                    <TextInput
                        ref={secondInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}

                        onChangeText={(text) => {
                            setOtp({ ...otp, 2: text });
                            text && nextInput(2);
                        
                        }}
                    />
                    <TextInput
                        ref={thirdInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => {
                            setOtp({ ...otp, 3: text });

                            text &&  nextInput(3);
                        
                        }}
                         
                    />
                    <TextInput
                        ref={fourthInput}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        
                        onChangeText={(text) => {
                            setOtp({ ...otp, 4: text });
                        
                        }}
                    />

                </View>



            </View>

        </View>

    )
}
export default OTP;
const styles = StyleSheet.create({
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
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50
    },
    txtOTP: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FF6B00",
        textAlign: 'center',
        marginTop: 10
    },
    txt: {
        fontSize: 15,
        color: "#000",
        textAlign: 'center',
        marginTop: 10
    },
    phone: {
        fontSize: 15,
        color: "#000",
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
    },
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

    }
})