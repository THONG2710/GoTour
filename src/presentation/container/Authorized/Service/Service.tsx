import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthorizedBottomNavigation from '../../../navigation/AuthorizedBottomNavigation';
import { ServiceParamlist } from '../../../storyboard/ServiceStoryBoard';
import Booking from './Booking/Booking';
import { ServiceProp } from './type';
import HotelDetail from './HotelDetail/HotelDetail';

const StackService = createStackNavigator<ServiceParamlist>();

const Service: React.FC<ServiceProp> = () => {
    return (
        <StackService.Navigator screenOptions={{ headerShown: false }}>
            <StackService.Screen name="s_booking" component={Booking} />
            <StackService.Screen name="s_detailhotel" component={HotelDetail} />

        </StackService.Navigator>
    );
};

export default Service;

const styles = StyleSheet.create({});