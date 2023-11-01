import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamlist} from '../../../storyboard/HomeStoryBoard';
import {NavigationContainer} from '@react-navigation/native';
import MainHome from './HomeMain/MainHome';
import ListTour from './ListTour/ListTour';
import {HomeProp} from './type';

const StackHome = createStackNavigator<HomeParamlist>();

const Home: React.FC<HomeProp> = () => {
  return (
    <StackHome.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="s_home" component={MainHome} />
      <StackHome.Screen name="b_listTour" component={ListTour} />
    </StackHome.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
