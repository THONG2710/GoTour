import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple';
import { SplashThreeProp } from './type';
import { NEXT_BUTTON, NEXT_FRAME, SPLASH_THREE } from '../../../../resource/assets/images';

const SplashThree: React.FC<SplashThreeProp> = (props) => {
    const {navigation} = props;

    const onNext = () => {
        navigation.navigate('splashThree');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imgSplash} source={{uri: SPLASH_THREE}}/>
                <View style={styles.footer}>
                    <Image style={styles.imgNextFooter} source={{uri: NEXT_FRAME}}></Image>
                    <Text style={styles.textTitle}>Được thiết kế dành riêng {`\n`} cho bạn</Text>
                    <Text style={styles.textContent}>Ứng dụng của chúng tôi tùy chỉnh thiết kế {`\n`} các đề xuất du lịch dựa trên sở thích và {`\n`} sở thích của bạn.</Text>
                    <Ripple onPress={onNext}>
                        <Image source={{uri: NEXT_BUTTON}}></Image>
                    </Ripple>
                </View>
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
        position: 'absolute',
        zIndex: -1,
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