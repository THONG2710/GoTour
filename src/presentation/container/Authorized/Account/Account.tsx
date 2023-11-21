import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AccountParamlist} from '../../../storyboard/AccountStoryBoard';
import Profile from './Profile/Profile';
import {AccountProp} from './type';
import History from './History/History';
import MyFavourites from './MyFavorites/MyFavourites';
import Editprofile from './EditProfile/EditProfile';
import MyRating from './Rating/MyRating';
import IntroduceScreen from './IntroduceScreen/IntroduceScreen';
import Post from './MyPost/Post';

const StackAccount = createStackNavigator<AccountParamlist>();

const Account: React.FC<AccountProp> = () => {
  return (
    <StackAccount.Navigator screenOptions={{headerShown: false}}>
      <StackAccount.Screen name="profile" component={Profile} />
      <StackAccount.Screen name="myFavorites" component={MyFavourites} />
      <StackAccount.Screen name="history" component={History} />
      <StackAccount.Screen name='editProfile'  component={Editprofile}/>
      <StackAccount.Screen name='rating' component={MyRating}/>
      <StackAccount.Screen name='introduction' component={IntroduceScreen}/>
      <StackAccount.Screen name='post' component={Post}/>
    </StackAccount.Navigator>
  );
};

export default Account;

const styles = StyleSheet.create({});
