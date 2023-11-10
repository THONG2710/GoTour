import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootParamlist } from '../storyboard/RootStoryBoard';
import { NavigationContainer } from '@react-navigation/native';
import SplashStackNavigation from './SplashStackNavigation';
import AuthenticationNavigation from './AuthenticationNavigation';
import AuthorizedBottomNavigation from './AuthorizedBottomNavigation';

const rootStack = createStackNavigator<RootParamlist>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <rootStack.Navigator screenOptions={{headerShown: false}}>
        <rootStack.Screen name='splash' component={SplashStackNavigation}/>
        <rootStack.Screen name='Authentication' component={AuthenticationNavigation}/>
        <rootStack.Screen name='authorized' component={AuthorizedBottomNavigation}/>
      </rootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation