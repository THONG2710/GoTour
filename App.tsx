/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashOne from './src/presentation/container/SplashOne';
import SplashTwo from './src/presentation/container/SplashTwo';
import SplashThree from './src/presentation/container/SplashThree';
import MyFavourite from './src/presentation/container/MyFavourite';
import ItemMyFavourite from './src/presentation/container/ItemTypeOfTravelMyFavourite';
import ItemExploreMyFavourite from './src/presentation/container/ItemExploreMyFavourite';
import ListShare from './src/presentation/container/ListShare';
import Profile from './src/presentation/container/Profile';


const App = (): JSX.Element => {
  return (
    <SplashThree></SplashThree>
  );
};
export default App;
