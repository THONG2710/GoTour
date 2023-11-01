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
import SplashTwo from './src/presentation/container/Splash/SplashTwo';
import SplashThree from './src/presentation/container/Splash/SplashThree';
import MyFavourite from './src/presentation/container/MyFavourite/Screen/MyFavourite';
import ItemMyFavourite from './src/presentation/container/MyFavourite/ItemMyFavourite/ItemTypeOfTravelMyFavourite';
import ItemExploreMyFavourite from './src/presentation/container/MyFavourite/ItemMyFavourite/ItemExploreMyFavourite';
import Profile from './src/presentation/container/Profille/Screen/Profile';
import Editprofile from './src/presentation/container/EditProfile/Screen/EditProfile';
import ViewForm from './src/presentation/container/EditProfile/Component/InputForm';
import Favourite from './src/presentation/container/Favourite/Screen/Favourite';
import ListShare from './src/presentation/container/ListShare/Screen/ListShare';
import SplashOne from './src/presentation/container/Splash/SplashOne';


const App = (): JSX.Element => {
  return (
    <SplashOne></SplashOne>
  );
};
export default App;
