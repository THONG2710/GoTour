import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AuthorizedParamList } from '../storyboard/AuthorizedStoryBoard';
import { NavigationContainer } from '@react-navigation/native';
import Social from '../container/Authorized/Social/Social';
import Deals from '../container/Authorized/Sale/Deals';
import Booking from '../container/Authorized/Service/Booking';
import Profile from '../container/Authorized/Account/Profile/Profile';
import MainHome from '../container/Authorized/Home/MainHome';

const AuthorizedBottomTab = createBottomTabNavigator<AuthorizedParamList>();

const AuthorizedBottomNavigation = () => {
  return (
    <NavigationContainer>
        <AuthorizedBottomTab.Navigator screenOptions={{headerShown: false}}>
            <AuthorizedBottomTab.Screen name='Home' component={MainHome}/>
            <AuthorizedBottomTab.Screen name='Social' component={Social}/>
            <AuthorizedBottomTab.Screen name='Service' component={Booking}/>
            <AuthorizedBottomTab.Screen name='Sale' component={Deals}/>
            <AuthorizedBottomTab.Screen name='account' component={Profile}/>
        </AuthorizedBottomTab.Navigator>
    </NavigationContainer>
  )
}

export default AuthorizedBottomNavigation