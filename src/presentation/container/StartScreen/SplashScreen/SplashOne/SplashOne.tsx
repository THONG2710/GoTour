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
import {SplashOneProp} from './type';
import {
  NEXT_BUTTON,
  NEXT_FRAME,
  SPLASH_ONE,
} from '../../../../resource/assets/images';

const SplashOne: React.FC<SplashOneProp> = props => {
  const {navigation} = props;

  const onNext = () => {
    navigation.navigate('splashTwo');
  };

  return (
    <View style={styles.container}>
      {/* IMAGE MAIN */}
      <Image style={styles.imgSplash} source={{uri: SPLASH_ONE}} />
      {/* FOOTER */}
      <View style={styles.footer}>
        <Image style={styles.imgNextFooter} source={{uri: NEXT_FRAME}}></Image>
        <Text style={styles.textTitle}>{TEST}</Text>
        <Text style={styles.textContent}>
          Khám phá Việt Nam cùng với {`\n`} GoTour bằng những chuyến phiêu{' '}
          {`\n`} lưu thú vị trên tất cả các vùng miền
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
    marginTop:65
  },

  btnImageNext: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});
