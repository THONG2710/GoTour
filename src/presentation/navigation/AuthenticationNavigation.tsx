import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthenticationParamList } from '../storyboard/AuthenticationStoryBoard';

const AuthenTicationStack = createNativeStackNavigator<AuthenticationParamList>();

const AuthenticationNavigation = () => {
  return (
    <NavigationContainer>
        <AuthenTicationStack.Navigator>
            {/* <AuthenTicationStack.Screen /> */}
        </AuthenTicationStack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenticationNavigation