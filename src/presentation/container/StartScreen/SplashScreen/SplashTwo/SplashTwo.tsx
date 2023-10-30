import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple';
import { SplashTwoProp } from './type';
import { NEXT_BUTTON, NEXT_FRAME, SPLASH_TWO } from '../../../../resource/assets/images';

const SplashTwo: React.FC<SplashTwoProp> = (props) => {
    const {navigation} = props;

    const onNext = () => {
        navigation.navigate('splashThree');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imgSplash} source={{uri: SPLASH_TWO}}/>
                <View style={styles.footer}>
                    <Image style={styles.imgNextFooter} source={{uri: NEXT_FRAME}}></Image>
                    <Text style={styles.textTitle}>Khám phá những chuyến {`\n`} đi cùng GoTour</Text>
                    <Text style={styles.textContent}>Lên kế hoạch cho những chuyến đi cũng {`\n`} những ưu đãi tốt nhất và tạo hành trình đáng {`\n`} nhớ một cách dễ dàng</Text>
                    <Ripple onPress={onNext}>
                        <Image style={{width: 50, height: 50}} source={{uri: NEXT_BUTTON}}></Image>
                    </Ripple>
                </View>
        </View>
    )
}

export default SplashTwo

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