import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthenticationParamList } from '../storyboard/AuthenticationStoryBoard';
import Login from '../container/StartScreen/Authentication/Login/Login';
import Register from '../container/StartScreen/Authentication/Register/Register';

const AuthenTicationStack = createNativeStackNavigator<AuthenticationParamList>();

const AuthenticationNavigation = () => {
  return (
    <NavigationContainer>
        <AuthenTicationStack.Navigator screenOptions={{headerShown: false}}>
            <AuthenTicationStack.Screen name='login' component={Login}/>
            <AuthenTicationStack.Screen name='register' component={Register}/>
        </AuthenTicationStack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenticationNavigation