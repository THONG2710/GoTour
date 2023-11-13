import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthorizedParamList} from '../storyboard/AuthorizedStoryBoard';
import {NavigationContainer} from '@react-navigation/native';
import Social from '../container/Authorized/Social/Social';
import Deals from '../container/Authorized/Sale/Deals';
import Booking from '../container/Authorized/Service/Booking/Booking';
import Profile from '../container/Authorized/Account/Profile/Profile';
import ItemBottomHome from '../component/Items/ItemBottomHome';
import {
  B_ACCOUNT,
  B_HOME,
  B_HOT,
  B_SERVICE,
  B_SOCIAL,
} from '../resource/assets/images';
import Home from '../container/Authorized/Home/Home';
import Account from '../container/Authorized/Account/Account';

const AuthorizedBottomTab = createBottomTabNavigator<AuthorizedParamList>();

const AuthorizedBottomNavigation = () => {
  return (
      <AuthorizedBottomTab.Navigator screenOptions={{headerShown: false}}>
        <AuthorizedBottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({focused}) => {
              return <ItemBottomHome isFocused={focused} icon={B_HOME} label="Trang chủ" />;
            },
          }}
        />
        <AuthorizedBottomTab.Screen
          name="Social"
          component={Social}
          options={{
            tabBarLabel: ({focused}) => {
              return <ItemBottomHome isFocused={focused} icon={B_SOCIAL} label="Mạng xã hội" />;
            },
          }}
        />
        <AuthorizedBottomTab.Screen
          name="Service"
          component={Booking}
          options={{
            tabBarLabel: ({focused}) => {
              return <ItemBottomHome isFocused={focused} icon={B_SERVICE} label="Dịch vụ" />;
            },
          }}
        />
        <AuthorizedBottomTab.Screen
          name="Sale"
          component={Deals}
          options={{
            tabBarLabel: ({focused}) => {
              return <ItemBottomHome isFocused={focused} icon={B_HOT} label="Khuyến mãi" />;
            },
          }}
        />
        <AuthorizedBottomTab.Screen
          name="account"
          component={Account}
          options={{
            tabBarLabel: ({focused}) => {
              return <ItemBottomHome isFocused={focused} icon={B_ACCOUNT} label="Cá nhân" />;
            },
          }}
        />
      </AuthorizedBottomTab.Navigator>
  );
};

export default AuthorizedBottomNavigation;
