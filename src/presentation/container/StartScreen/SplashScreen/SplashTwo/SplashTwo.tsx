import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
  import Ripple from 'react-native-material-ripple';
  import {TEST} from '../../../../resource/assets/String/VNString';
  import {SplashTwoProp} from './type';
  import {
    NEXT_BUTTON,
    NEXT_FRAME,
    SPLASH_TWO,
  } from '../../../../resource/assets/images';
  
  const SplashOne: React.FC<SplashTwoProp> = props => {
    const {navigation} = props;
  
    const onNext = () => {
      navigation.navigate('splashThree');
    };
  
    return (
      <View style={styles.container}>
        {/* IMAGE MAIN */}
        <Image style={styles.imgSplash} source={{uri: SPLASH_TWO}} />
        {/* FOOTER */}
        <View style={styles.footer}>
          <Image style={styles.imgNextFooter} source={{uri: NEXT_FRAME}}></Image>
          <Text style={styles.textTitle}>Khám phá những chuyến {`\n`} đi cùng GoTour</Text>
          <Text style={styles.textContent}>
          Lên kế hoạch cho những chuyến đi cũng {`\n`} những ưu đãi tốt nhất và tạo hành trình {`\n`} đáng nhớ một cách dễ dàng
          </Text>
          <Ripple style={styles.btnNext} rippleContainerBorderRadius={40} onPress={onNext}>
            <Image
              style={styles.btnImageNext}
              source={{uri: NEXT_BUTTON}}></Image>
          </Ripple>
        </View>
      </View>
    );
  };
  
  export default SplashOne;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    // ============ IMAGE MAIN =================
    imgSplash: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1,
    },
  
    // ============= FOOTER =================== 
    footer: {
      width: '100%',
      position: 'absolute',
      alignItems: 'center',
      height: '50%',  
      marginTop: Dimensions.get('screen').height/1.8,
      
    },
  
    imgNextFooter: {
      position: 'absolute',
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height / 3.5,
      resizeMode: 'contain',
    },
  
    textTitle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop:20
    },
  
    textContent: {
      textAlign: 'center',
      fontSize: 14,
      color: 'white',
      marginVertical: 10,
    },

    btnNext:
    {
      marginTop:40
    },
  
  
    btnImageNext: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    
  });
  