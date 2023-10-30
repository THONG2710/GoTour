import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AuthorizedParamList } from '../storyboard/AuthorizedStoryBoard';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../container/screens/Home';
import Social from '../container/screens/Social';
import Deals from '../container/screens/Deals';
import Booking from '../container/screens/Booking';

const AuthorizedBottomTab = createBottomTabNavigator<AuthorizedParamList>();

const AuthorizedBottomNavigation = () => {
  return (
    <NavigationContainer>
        <AuthorizedBottomTab.Navigator>
            <AuthorizedBottomTab.Screen name='Home' component={Home}/>
            <AuthorizedBottomTab.Screen name='Social' component={Social}/>
            <AuthorizedBottomTab.Screen name='Sale' component={Deals}/>
            <AuthorizedBottomTab.Screen name='Service' component={Booking}/>
        </AuthorizedBottomTab.Navigator>
    </NavigationContainer>
  )
}

export default AuthorizedBottomNavigation