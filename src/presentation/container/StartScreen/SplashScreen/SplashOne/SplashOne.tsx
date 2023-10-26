import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {TEST} from '../../../../resource/assets/String';
import {SplashOneProp} from './type';
import { SPLASH_ONE } from '../../../../resource/assets/images';

const SplashOne: React.FC<SplashOneProp> = props => {
  const {navigation} = props;

  const onNext = () => {
    navigation.navigate('splashTwo');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgSplash}
        source={{uri: SPLASH_ONE}}/>
      <View style={styles.footer}>
        <Image
          style={styles.imgNextFooter}
          source={require('../../../../resource/assets/images/imgNext.png')}></Image>
        <Text style={styles.textTitle}>{TEST}</Text>
        <Text style={styles.textContent}>
          Khám phá Việt Nam cùng với {`\n`} GoTour bằng những chuyến phiêu{' '}
          {`\n`} lưu thú vị trên tất cả các vùng miền
        </Text>
        <Ripple onPress={onNext}>   
          <Image
            source={require('../../../../resource/assets/images/btnNext.png')}></Image>
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

  footer: {
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    bottom: 20,
  },

  imgSplash: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },

  imgNextFooter: {
    position: 'absolute',
    bottom: 60,
  },

  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },

  textContent: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    marginVertical: 10,
  },
});
