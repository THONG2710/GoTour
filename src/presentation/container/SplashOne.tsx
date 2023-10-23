import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple';

const SplashOne = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgSplash} source={require('../resource/assets/images/splashOne.png')}>

                <View style={styles.footer}>
                    <Image style={styles.imgNextFooter} source={require('../resource/assets/images/imgNext.png')}></Image>
                    <Text style={styles.textTitle}>Chào mừng bạn đến với {`\n`}GoTour</Text>
                    <Text style={styles.textContent}>Khám phá Việt Nam cùng với {`\n`} GoTour bằng những chuyến phiêu {`\n`} lưu thú vị trên tất cả các vùng miền</Text>
                    <Ripple rippleCentered={true} rippleDuration={1000} rippleContainerBorderRadius={150}>
                        <Image source={require('../resource/assets/images/btnNext.png')}></Image>
                    </Ripple>
                </View>
            </ImageBackground>

        </View>
    )
}

export default SplashOne

const styles = StyleSheet.create({
    container:
    {
        flex: 1
    },



    footer:
    {
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        bottom:20
    },

    imgSplash:
    {
        width: '100%',
        height: '100%',
    },

    imgNextFooter:
    {
        position: 'absolute',
        bottom: 60,

    },

    textTitle:
    {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom:15
    },

    textContent:
    {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        marginVertical:10

    }
})