import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamlist} from '../../../storyboard/HomeStoryBoard';
import {NavigationContainer} from '@react-navigation/native';
import MainHome from './HomeMain/MainHome';
import ListTour from './ListTour/ListTour';
import {HomeProp} from './type';
import AuthorizedBottomNavigation from '../../../navigation/AuthorizedBottomNavigation';
import Booking from '../Service/Booking';

const StackHome = createStackNavigator<HomeParamlist>();

const Home: React.FC<HomeProp> = () => {
  return (
    <StackHome.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="s_home" component={MainHome} />
      <StackHome.Screen name="s_listTour" component={ListTour} />
      {/* <StackHome.Screen name='s_booking' component={Booking}/> */}
    </StackHome.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
