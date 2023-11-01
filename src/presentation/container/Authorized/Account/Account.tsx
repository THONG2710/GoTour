import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { AccountParamlist } from '../../../storyboard/AccountStoryBoard';
import Profile from './Profile/Profile';
import { AccountProp } from './type';

const StackAccount = createStackNavigator<AccountParamlist>();

const Account: React.FC<AccountProp> = () => {
  return (
    <NavigationContainer>
        <StackAccount.Navigator screenOptions={{headerShown: false}}>
            <StackAccount.Screen name='profile' component={Profile}/>
            
        </StackAccount.Navigator>
    </NavigationContainer>
  )
}

export default Account

const styles = StyleSheet.create({})