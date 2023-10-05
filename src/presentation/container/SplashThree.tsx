import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple';

const SplashThree = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgSplash} source={require('../resource/assets/images/splashThree.png')}>

                <View style={styles.footer}>
                    <Image style={styles.imgNextFooter} source={require('../resource/assets/images/imgNext.png')}></Image>
                    <Text style={styles.textTitle}>Được thiết kế dành riêng {`\n`} cho bạn</Text>
                    <Text style={styles.textContent}>Ứng dụng của chúng tôi tùy chỉnh thiết kế {`\n`} các đề xuất du lịch dựa trên sở thích và {`\n`} sở thích của bạn.</Text>
                    <Ripple>
                        <Image source={require('../resource/assets/images/btnNext.png')}></Image>
                    </Ripple>
                </View>
            </ImageBackground>

        </View>
    )
}

export default SplashThree

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