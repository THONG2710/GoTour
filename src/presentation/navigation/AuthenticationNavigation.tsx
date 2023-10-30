import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationParamList} from '../storyboard/AuthenticationStoryBoard';
import Login from '../container/StartScreen/Authentication/Login/Login';
import Register from '../container/StartScreen/Authentication/Register/Register';
import ChangePassword from '../container/StartScreen/Authentication/ChangePassword/ChangePassword';
import ResetPassword from '../container/StartScreen/Authentication/ResetPassword/ResetPassword';
import OTP from '../container/StartScreen/Authentication/SendOTP/OTP';
import AuthorizedBottomNavigation from './AuthorizedBottomNavigation';

const AuthenTicationStack =
  createNativeStackNavigator<AuthenticationParamList>();

const AuthenticationNavigation = () => {
  return (
    <AuthenTicationStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenTicationStack.Screen name="login" component={Login} />
      <AuthenTicationStack.Screen name="register" component={Register} />
      <AuthenTicationStack.Screen
        name="changePassword"
        component={ChangePassword}
      />
      <AuthenTicationStack.Screen
        name="resetPassword"
        component={ResetPassword}
      />
      <AuthenTicationStack.Screen name="sendOTP" component={OTP} />
      <AuthenTicationStack.Screen name='authorized'  component={AuthorizedBottomNavigation}/>
    </AuthenTicationStack.Navigator>
  );
};

export default AuthenticationNavigation;
