import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashParamlist } from '../storyboard/SplashStoryBoard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashOne from '../container/Authentication/Splashs/SplashOne/SplashOne';
import SplashTwo from '../container/Authentication/Splashs/SplashTwo/SplashTwo';
import SplashThree from '../container/Authentication/Splashs/SplashThree/SplashThree';

const Stack = createStackNavigator<SplashParamlist>();

const SplashStackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='splashOne' component={SplashOne}/>
            <Stack.Screen name='splashTwo' component={SplashTwo}/>
            <Stack.Screen name='splashThree' component={SplashThree}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SplashStackNavigation

const styles = StyleSheet.create({})