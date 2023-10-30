import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashParamlist } from '../storyboard/SplashStoryBoard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashOne from '../container/StartScreen/SplashScreen/SplashOne/SplashOne';
import SplashTwo from '../container/StartScreen/SplashScreen/SplashTwo/SplashTwo';
import SplashThree from '../container/StartScreen/SplashScreen/SplashThree/SplashThree';
import AuthenticationNavigation from './AuthenticationNavigation';

const Stack = createStackNavigator<SplashParamlist>();

const SplashStackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='splashOne' component={SplashOne}/>
            <Stack.Screen name='splashTwo' component={SplashTwo}/>
            <Stack.Screen name='splashThree' component={SplashThree}/>
            <Stack.Screen name='authentication' component={AuthenticationNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SplashStackNavigation

const styles = StyleSheet.create({})